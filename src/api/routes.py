
"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User,Medicamentos
from api.utils import generate_sitemap, APIException

from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import or_

import random
import smtplib

from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

 

# funcion de correo
def mail(asunto,mensaje,correo):
    email = 'correodepruba70@gmail.com'
    message = mensaje
    subject = asunto
    message = 'Subject:{}\n\n{}'.format(subject, message)  # ojo, el subject debe ir escrito así, sino no lo identifica
    server = smtplib.SMTP('smtp.gmail.com',587) 
                           # Definir objeto smtp...primero se define el servidor de correo.. luego el puerto a usar
    server.ehlo()                       
    server.starttls()  # Le decimos al programa que vamos a usar el protocolo tls
    server.login('correodepruba70@gmail.com', '.123456789.a') # server.login(correo-contrasena)
    #NO SE MUESTRAN EL CORREO O LA CONTRASENA POR SEGURIDAD
    server.sendmail(email,correo,message)  # Quien envia el correo,quien lo recibe,mensaje
    server.quit()





api = Blueprint('api', __name__)


# jwt = JWTManager(api) 


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


@api.route('/users/<int:id>/info',methods=['GET'])
def get_info_users(id):
    if request.method=="GET":
        try:
            info=User.query.get(id)      
            serializado=info.serialize()
            return jsonify(serializado),200
        except:
           
            return jsonify({"status":"failed","msg":"404 resource not found"}),404
    


@api.route('/users/<int:id>/info',methods=['POST'])
def post_info(id):
    if request.method=="POST":
        body=request.get_json()
        nombre=body.get('name')
        
        correo=body.get('email')
        cedula=body.get('ci')
        edad=body.get('age')
        fecha=body.get('date')
        tel_usuario=body.get('user_phone')
        nombre_cuidador=body.get('caregiver_name')
        tel_cuidador=body.get('caregiver_phone')
        peso=body.get('weight')
        altura=body.get('height')
        profesion=body.get('profession')
        medicamentos=body.get('medicines')
        enfermedades=body.get('diseases')
        alergias=body.get('alergies')
        
        user=User.query.get(id)
        if user==None:
            return jsonify({"status":"failed","msg":"User does not  exist"}),400
        user.name =nombre
        user.email =correo
        user.Cedula = cedula
        user.Edad = edad
        user.Fecha_Nacimiento = fecha
        user.Telefono_Usuario =tel_usuario
        user.Nombre_Cuidador =nombre_cuidador
        user.Telefono_Cuidador= tel_cuidador
        user.Peso_Usuario=peso
        user.Altura_Usuario= altura
        user.Profesion=profesion
        user.Medicamentos_Actuales=medicamentos 
        user.Enfermedades =enfermedades
        user.Alergias_Medicamentosas_Alimenticias=alergias 

        db.session.add(user)
        db.session.commit()


        return jsonify({"status":"success","msg":"Info added successfully"}),200

#recuperacion de Contraseña
@api.route("/restore_password/<int:id>", methods=['POST'])
def restore_password(id):
    if request.method == 'POST':
        body = request.get_json()
        email = body.get("email")
        
        restore_id = User.query.get(id)
        if not restore_id:
            return jsonify({"msg":"User does not exist"}), 400
        
        # restore_id = User()
        
    
        code = round(random.random()*10000)
        restore_id.code = code
        
        header = "Password reset"
        container = "This is your security code : " + str(code) 
        correo = email
        mail(header,container,correo)
         
        
        print(mail)
        db.session.add(restore_id)
        db.session.commit()
        return jsonify({"status":"succed","msj":"The code has been sent"}), 200

@api.route('/users/recovery/<int:id>',methods=['POST'])
def user_verification(id):
    body=request.get_json()
    codigo=body.get('code')
    # email=body.get('email')
    user=User.query.get(id)
    if user==None:
        return jsonify({"status":"failed","msg":"User does not exist"}),404
    if codigo==user.code:
        return jsonify({"status":"success","msg":"Code is correct"}),200
    else:
        return jsonify({"status":"failed","msg":"Code is not correct"}),404

@api.route('/users/actualizarcontrasena/<int:id>',methods=['PUT'])
def pass_update(id):
    body=request.get_json()
    password=body.get("password")
    user=User.query.get(id)
    if user==None:
        return jsonify({"status":"failed","msg":"User does not exist"}),404

    hashed_password = generate_password_hash(str(password))

    user.password = hashed_password
    db.session.add(user)
    db.session.commit()
    return jsonify({"status":"succed","msg":"password updated properly"}),200
    



@api.route('/medicines/<string:medicamento>',methods=['GET'])
def get_user_medicine(medicamento):
    palabra=medicamento

    
    resultado2 =Medicamentos.query.filter(or_(Medicamentos.nombre_comercial==medicamento,Medicamentos.principio_activo==medicamento)).first()
    print(resultado2,"resultado2")
    if resultado2 != None:
        resultado_serializado=resultado2.serialize()
        return jsonify({"status":"success","msg":"The medicice was found","data":resultado_serializado}),200


    for x in reversed(range(len(palabra))):
        for inicial in range(len(palabra)-3):
            if len(palabra[inicial:x+5])>4:
                print(palabra[inicial:x+5],"linea anterior")
                busqueda="%"+palabra[inicial:x+5]+"%"
                print(busqueda,"busqueda")
                resultado=Medicamentos.query.filter(or_(Medicamentos.nombre_comercial.like(busqueda),Medicamentos.principio_activo.like(busqueda))).all()
                print(resultado,"resultado")
                if resultado !=[]:
                    for x in range(len(resultado)):
                        resultado[x]=resultado[x].serialize()  
                        print(x,resultado,"imprime")    

                   
                    return jsonify({"status":"success","msg":"were you trying to say:","data":resultado}),200
                    

    return jsonify({"msj":"medicine was not found","status":"failed"}),404




    

@api.route('/register', methods=['POST'])
def register():
    
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        name = request.json.get("name", None)
        
        if not email: 
            return jsonify({"msg":"Email is required","status":"failed"}),400
        if not password:
             return jsonify({"msg":"Password is required","status":"failed"}),400
        if not name:
            return jsonify({"msg":"Name is required","status":"failed"}),400
        
        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({"msg":"Email already exists","status":"failed"}), 400
        
        user = User()
        user.email = email
        user.name = name
        hashed_password = generate_password_hash(password)
        #print("hola")
        user.password = hashed_password
        
        db.session.add(user)
        db.session.commit()
        return jsonify({"status":"success","msg":"Succesfully registered"}), 200
    
    
@api.route('/login', methods=['POST'])   
def login():
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password",None)
        
        if not email:
            return jsonify({"msg":"Email is required","status":"failed"}), 400
        if not password:
            return jsonify({"msg":"Password is required","status":"failed"}), 400
        
        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"msg":"Email is incorrect","status":"failed"}), 401
        if not check_password_hash(user.password, password):
            return jsonify({"msg":"Password incorret","status":"failed"}), 401
        
        #creacion token
        access_token = create_access_token(identity=user.email) 
        
        data = {
            "user":user.serialize(),
            "token":access_token,
            "status:":"succeed"
        }
        
        return jsonify({ "data":data,"msg":"login succesfull","status":"succesfull" }),200
#las rutas de register y login ya se provaron en postman    
             
#estas rutas son relacionadas al los medicamentos(GET, GET/ID, POST, DELETE)
@api.route('/medicamentos', methods=['GET'])
def get_medicamentos():
    
    medicamento_query = Medicamentos.query.all()
    all_medicamento = list(map(lambda x: x.serialize(), medicamento_query))
    return jsonify(all_medicamento), 200
@api.route('/medicamentos/<int:id>', methods=['GET'])
def get_medicamentos_id(id):
    medicamento = Medicamentos.query.get(principio_activo)
    return jsonify(medicamento.serialize())
#David se encarga de este get    
        
@api.route('/medicamentos', methods=['POST'])
def medicamentos():
    
        body = request.get_json()
        medicamento = Medicamentos(
        nombre_comercial = body["nombre_comercial"],
        principio_activo = body["principio_activo"],
        presentaciones = body["presentaciones"],
        respuesta_1 = body["respuesta_1"],
        respuesta_2 = body["respuesta_2"],
        respuesta_3 = body["respuesta_3"],
        respuesta_4 = body["respuesta_4"],
        respuesta_5 = body["respuesta_5"],
        respuesta_6 = body["respuesta_6"],
        respuesta_7 =body["respuesta_7"])
        
        
        db.session.add(medicamento)
        db.session.commit()
        return jsonify("info correcta de medicamento"), 200
     
@api.route('/medicamentos/<int:id>', methods=['DELETE'])
def del_medicamentos(id):
    
    del_med = Medicamentos.query.get(id)
    if del_med is None:
        raise APIException('Medicamento no encontrado', status_code=404)
    db.session.delete(del_med)
    db.session.commit()
    
    return jsonify("delete successful"), 200
#rutas del medicamentos ya  se provaron en postman  




@api.route("/farmainfo/<int:id>", methods=['POST'])
def farma_info(id):
    if request.method == 'POST':
        body = request.get_json()
        consulta= body.get("data")
        userinfo = User.query.get(id)
        if not userinfo:
            return jsonify({"msg":"ID doesnt exists"}), 400
        user = userinfo
        email = user.email
        name = user.name
        cedula = user.Cedula
        edad = user.Edad
        Fecha_Nacimiento = user.Fecha_Nacimiento
        Telefono_Usuario = user.Telefono_Usuario
        Nombre_Cuidador = user.Nombre_Cuidador
        Telefono_Cuidador = user.Telefono_Cuidador
        Peso_Usuario = user.Peso_Usuario
        Altura_Usuario = user.Altura_Usuario
        Profesion = user.Profesion
        Medicamentos_Actuales = user.Medicamentos_Actuales
        Enfermedades = user.Enfermedades
        Alergias_Medicamentosas_Alimenticias = user.Alergias_Medicamentosas_Alimenticias
        header = "Informacion de Usuario"
        container = "Estos son lo datos del usuario \n\n email: {} \n\n name: {} \n\n cedula:{} \n\n edad:{} \n\n  Fecha Nacimiento :{} \n\n Telefono de Usuario:{} \n\n Nombre de Cuidador:{} \n\n Telefono de Cuidador:{} \n\n Peso de Usuario:{} \n\n Altura de Usuario:{} \n\n Profesion:{} \n\n Medicamentos Actuales:{} \n\n Enfermedades:{} \n\n Alergias Medicamentos:{} \n\n Consulta medica:\n {}".format(email, name, cedula, edad, Fecha_Nacimiento, Telefono_Usuario, Nombre_Cuidador,Telefono_Cuidador,Peso_Usuario,Altura_Usuario,Profesion, Medicamentos_Actuales,Enfermedades, Alergias_Medicamentosas_Alimenticias, consulta)
        correo = "daviducr.2593@gmail.com"#correo q le llega la info
        mail(header,container,correo)
        print(mail)
        db.session.add(user)
        db.session.commit()
        return jsonify("prueba de restore password"), 200



