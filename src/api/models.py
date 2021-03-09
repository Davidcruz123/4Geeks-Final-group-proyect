from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False) 
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    code = db.Column(db.Integer)
    

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "email": self.email,
            "code":self.code
            # do not serialize the password, its a security breach
        }
class UserInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(120), nullable=False) 
    Lastname = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False) 
    Cedula = db.Column(db.String(120), unique=True, nullable=False)
    Edad = db.Column(db.String(120))
    Fecha_Nacimiento = db.Column(db.String(120),nullable=False) 
    Telefono_Usuario = db.Column(db.String(120),nullable=False)
    Nombre_Cuidador = db.Column(db.String(120),nullable=False)
    Telefono_Cuidador = db.Column(db.String(120),nullable=False)
    Peso_Usuario = db.Column(db.String(120),nullable=False)
    Altura_Usuario = db.Column(db.String(120),nullable=False)
    Profesion = db.Column(db.String(120),nullable=False)
    Medicamentos_Actuales = db.Column(db.String(240),nullable=False)
    Enfermedades = db.Column(db.String(120),nullable=False)
    Alergias_Medicamentosas_Alimenticias =  db.Column(db.String(240),nullable=False)
    

    def __repr__(self):
        return '<UserInfo %r>' % self.userinf

    def serialize(self):
        return {
            "id": self.id,
            "Name":self.Name,
            "Lastname":self.Lastname,
            "email": self.email,
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