from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    code = db.Column(db.Integer)

    Cedula = db.Column(db.String(120), unique=True)
    Edad = db.Column(db.String(120))
    Fecha_Nacimiento = db.Column(db.String(120)) 
    Telefono_Usuario = db.Column(db.String(120))
    Nombre_Cuidador = db.Column(db.String(120))
    Telefono_Cuidador = db.Column(db.String(120))
    Peso_Usuario = db.Column(db.String(120))
    Altura_Usuario = db.Column(db.String(120))
    Profesion = db.Column(db.String(120))
    Medicamentos_Actuales = db.Column(db.String(240))
    Enfermedades = db.Column(db.String(120))
    Alergias_Medicamentosas_Alimenticias =  db.Column(db.String(240))
    

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "email": self.email,
            "code":self.code,
            "Cedula":self.Cedula,
            "Edad":self.Edad,
            "Fecha Nacimiento":self.Fecha_Nacimiento,
            "Telefono Usuario ":self.Telefono_Usuario,
            "Nombre Cuidador ":self.Nombre_Cuidador,
            "Telefono Cuidador ":self.Telefono_Cuidador,
            "Peso Usuario ":self.Peso_Usuario,
            "Altura Usuario":self.Altura_Usuario,
            "Profesion":self.Profesion,
            "Medicamentos Actuales":self.Medicamentos_Actuales,
            "Enfermedades":self.Enfermedades,
            "Alergias Medicamentosas/Alimenticias":self.Alergias_Medicamentosas_Alimenticias
            # do not serialize the password, its a security breach
        }



class Medicamentos(db.Model):
    _tablename_ = 'medicamentos'
    id = db.Column(db.Integer, primary_key=True)
    nombre_comercial = db.Column(db.Text, nullable=False) 
    principio_activo = db.Column(db.String(120), unique=True, nullable=False)
    presentaciones = db.Column(db.String(120),  nullable=False)
    
    respuesta_1 = db.Column(db.Text,  nullable=False)
    respuesta_2 = db.Column(db.Text,  nullable=False)
    respuesta_3 = db.Column(db.Text,  nullable=False)
    respuesta_4 = db.Column(db.Text,  nullable=False)
    respuesta_5 = db.Column(db.Text,  nullable=False)
    respuesta_6 = db.Column(db.Text,  nullable=False)
    respuesta_7 = db.Column(db.Text,  nullable=False)
    def _repr_(self):
        return '<Medicamentos %r>' % self.id
    def serialize(self):
        return {
            "id": self.id,
            "nombre_comercial":self.nombre_comercial,
            "principio_activo": self.principio_activo,
            "presentaciones":self.presentaciones,
            "marcas_comerciales":self.presentaciones,
            "respuesta_1":self.respuesta_1,
            "respuesta_2":self.respuesta_2,
            "respuesta_3":self.respuesta_3,
            "respuesta_4":self.respuesta_4,
            "respuesta_5":self.respuesta_5,
            "respuesta_6":self.respuesta_6,
            "respuesta_7":self.respuesta_7
            # do not serialize the password, its a security breach
        }

