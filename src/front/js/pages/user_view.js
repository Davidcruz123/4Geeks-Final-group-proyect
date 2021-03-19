import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/user_view.scss";
import foto from "../../img/Portada02.png";

export const User = () => {
	if (JSON.parse(localStorage.getItem("user_information")) == null) {
		return <Redirect to="/" />;
	}

	const info = JSON.parse(localStorage.getItem("user_information")).userinf;
	const local = JSON.parse(localStorage.getItem("user_information"));
	const { store, actions } = useContext(Context);
	//console.log("info", info);
	console.log("buscar el id", info);
	console.log("local", local);

	let valores = Object.values(info);
	console.log(valores);

	const [nombre, setNombre] = useState(info.name);
	const [cedula, setCedula] = useState(info.Cedula);
	const [edad, setEdad] = useState(info.Edad);
	const [dob, setdob] = useState(valores[5]);
	const [telefono, setTelefono] = useState(valores[11]);
	const [cuidador, setCuidador] = useState(valores[7]);
	const [numcuidador, setNumcuidador] = useState(valores[10]);
	const [peso, setpeso] = useState(valores[8]);
	const [estatura, setestatura] = useState(valores[1]);
	const [profesion, setprofesion] = useState(info.Profesion);
	const [enfermedades, setenfermedades] = useState(valores[4]);
	const [medicamentos, setmedicamentos] = useState(valores[6]);
	const [alergias, setalergias] = useState(valores[0]);

	const infoSubmmit = e => {
		e.preventDefault();

		let correo = info.email;
		let id = local.id;
		let usuario = id.toString();
		const data = {
			name: nombre,
			email: correo,
			age: edad,
			ci: cedula,
			date: dob,
			user_phone: telefono,
			caregiver_name: cuidador,
			caregiver_phone: numcuidador,
			weight: peso,
			height: estatura,
			profession: profesion,
			diseases: enfermedades,
			medicines: medicamentos,
			alergies: alergias
		};

		// console.log("data", data);
		console.log(
			`https://3001-harlequin-ape-v1e477jn.ws-us03.gitpod.io/api/users/${usuario}/info`,
			"link que se usará"
		);
		fetch(`https://3001-magenta-orca-okjcs666.ws-us03.gitpod.io/api/users/${usuario}/info`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data) //convierte data a string
		})
			.then(response => response.json())
			.then(data => {
				let datos = {
					"Alergias Medicamentosas/Alimenticias": alergias,
					"Altura Usuario": estatura,
					Cedula: cedula,
					Edad: edad,
					Enfermedades: enfermedades,
					"Fecha Nacimiento": dob,
					"Medicamentos Actuales": medicamentos,
					"Nombre Cuidador": cuidador,
					"Peso Usuario": peso,
					Profesion: profesion,
					"Telefono Cuidador ": numcuidador,
					"Telefono Usuario ": telefono,
					email: correo,
					name: nombre
				};
				let session_info = {
					token: local.token,
					id: local.id,
					userinf: datos,
					userDataReady: true
				};
				console.log("session_info", session_info);
				localStorage.setItem("user_information", JSON.stringify(session_info));
				document.getElementById("mensajeAlerta").style.display = "block";
			})
			.catch(error => {
				// console.log("Error", error);
			});
	};

	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4 text-white">{nombre}</h1>
				<img src={foto} width="40%" />
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
				</div>
			</div>
			<h1>Mi Cuenta</h1>
			<h3>Mira y edita tu información personal a continuación.</h3>

			<br />
			<form onSubmit={e => infoSubmmit(e)}>
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
								setCuidador(evento.target.value);
							}}
							value={cuidador}
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
								setNumcuidador(evento.target.value);
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
					<label className="alergias">Alergias a medicamentos</label>
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

				<p className="text-danger" id="mensajeAlerta">
					{" "}
					La información ha sido actualizada{" "}
				</p>

				<button type="submit" className="btn btn-primary ">
					Actualizar
				</button>
				<Link to="/parmacy_consultation">
					<button type="submit" className="btn btn-primary bg-info text-white">
						Hacer consulta de Medicamentos
					</button>
				</Link>
			</form>
		</div>
	);
};
