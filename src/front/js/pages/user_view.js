import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/user_view.scss";

export const User = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("Carlos Lastres");
	const [cedula, setCedula] = useState("205790475");
	const [edad, setEdad] = useState("25");
	const [dob, setdob] = useState("01/18/1990");
	const [telefono, setTelefono] = useState("(506) 7010-9320");
	const [cuidador, setcuidador] = useState("David PITT");
	const [numcuidador, setphonecuidador] = useState("(506) 7010-8000");
	const [peso, setpeso] = useState("85 Kg");
	const [estatura, setestatura] = useState("1.80 Mts");
	const [profesion, setprofesion] = useState("Criminologo");
	const [enfermedades, setenfermedades] = useState("Presion Alta");
	const [medicamentos, setmedicamentos] = useState("Clonazepan");
	const [alergias, setalergias] = useState("Diazepan");

	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4 text-white">Nombre de Usuario</h1>
				<img
					src="https://browser-harlequin-dog-v413dqz1.ws-us03.gitpod.io/workspace/4Geeks-Final-group-proyect/src/front/img/Portada%2002.png"
					width="40%"
				/>
				<br />
				<br />
				<br />
				<p className="lead text-white">
					Al formar parte de nuestra comunidad vas a tener acceso a poder hacer consultas con nuestros
					farmaceuticos profesionales el tiempo de respuesta es de 24 horas. Subcribete a nuestra pagina para
					poder disfrutar de esta gran experiencia.
				</p>
				<div className="my-4 text-white">
					<p>
						Ademas de poder consultar informacion con nuestro personal farmaceutico estaras sujeto a recibir
						notificaciones con actualizaciones de producto y mas...
					</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>
			</div>
			<h1>Mi Cuenta</h1>
			<h3>Mira y edita tu información personal a continuación.</h3>

			<br />
			<form>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label className="name">
							<b>Nombre y Apellidos</b>
						</label>
						<input
							type="text"
							className="form-control"
							id="inputCedula4"
							name="name"
							required
							placeholder=""
							onChange={evento => {
								setNombre(evento.target.value);
							}}
							value={nombre}
						/>
					</div>
					<div className="form-group col-md-6">
						<label className="cedula">Numero Cedula</label>
						<input
							type="text"
							className="form-control"
							id="inputCedula4"
							name="cedula"
							required
							placeholder=""
							onChange={evento => {
								setCedula(evento.target.value);
							}}
							value={cedula}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label className="edad">Edad</label>
						<input
							type="text"
							className="form-control"
							id="inputEdad4"
							placeholder=""
							name="edad"
							required
							onChange={evento => {
								setEdad(evento.target.value);
							}}
							value={edad}
						/>
					</div>
					<div className="form-group col-md-6">
						<label className="dob">Fecha Nacimiento</label>
						<input
							type="text"
							className="form-control"
							id="dob"
							placeholder=""
							name="dob"
							required
							onChange={evento => {
								setdob(evento.target.value);
							}}
							value={dob}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label className="telefono">Numero de Telefono</label>
						<input
							type="text"
							className="form-control"
							id="inputTelefono4"
							placeholder=""
							name="telefono"
							required
							onChange={evento => {
								setTelefono(evento.target.value);
							}}
							value={telefono}
						/>
					</div>
					<div className="form-group col-md-6">
						<label className="cuidador">Nombre y Apellidos Cuidador</label>
						<input
							type="text"
							className="form-control"
							id="nombre_cuidador4"
							placeholder=""
							name="cuidador"
							required
							onChange={evento => {
								setTelefono(evento.target.value);
							}}
							value={telefono}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label className="telefonocuidador">Numero de Telefono Cuidador</label>
						<input
							type="text"
							className="form-control"
							id="inputTelefono_cuidador4"
							placeholder=""
							name="telefonocuidador"
							required
							onChange={evento => {
								setphonecuidador(evento.target.value);
							}}
							value={numcuidador}
						/>
					</div>
					<div className="form-group col-md-6">
						<label className="peso">Peso Usuario</label>
						<input
							type="text"
							className="form-control"
							id="peso_usuario4"
							placeholder=""
							name="peso"
							required
							onChange={evento => {
								setpeso(evento.target.value);
							}}
							value={peso}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-6">
						<label className="estatura">Estatura Usuario</label>
						<input
							type="text"
							className="form-control"
							id="inputEstatura4"
							name="estatura"
							required
							placeholder=""
							onChange={evento => {
								setestatura(evento.target.value);
							}}
							value={estatura}
						/>
					</div>
					<div className="form-group col-md-6">
						<label className="profesion">Profesion</label>
						<input
							type="text"
							className="form-control"
							id="profesion4"
							name="profesion"
							required
							placeholder=""
							onChange={evento => {
								setprofesion(evento.target.value);
							}}
							value={profesion}
						/>
					</div>
				</div>
				<div className="form-group">
					<label className="enfermedades">Enfermedades que padece actualmente</label>
					<input
						type="text"
						className="form-control"
						id="inputEnfermedades4"
						placeholder=""
						name="enfermedades"
						required
						onChange={evento => {
							setenfermedades(evento.target.value);
						}}
						value={enfermedades}
					/>
				</div>

				<div className="form-group">
					<label className="medicamentos">Medicamentos que toma en la actualidad</label>
					<input
						type="text"
						className="form-control"
						id="inputMedicamentos2"
						placeholder=""
						name="medicamentos"
						required
						onChange={evento => {
							setmedicamentos(evento.target.value);
						}}
						value={medicamentos}
					/>
				</div>

				<div className="form-group">
					<label className="alergias">Alergias Medicamentosas</label>
					<input
						type="text"
						className="form-control"
						id="inputAlergias2"
						placeholder=""
						name="alergias"
						required
						onChange={evento => {
							setalergias(evento.target.value);
						}}
						value={alergias}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Actualizar
				</button>
				<button type="submit" className="btn btn-primary">
					Hacer consulta de Medicamentos
				</button>
			</form>
		</div>
	);
};
