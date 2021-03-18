import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/buscar_medicamentos.scss";
import imagen from "../../img/buscar_medicamentos.jpg";
import imagen2 from "../../img/medicamentos2.jpg";
import { Redirect } from "react-router-dom";
export const Medicamentos = () => {
	const { store, actions } = useContext(Context);

	if (JSON.parse(localStorage.getItem("user_information")) == null) {
		return <Redirect to="/login" />;
	}

	const info = JSON.parse(localStorage.getItem("user_information")).userinf;
	const local = JSON.parse(localStorage.getItem("user_information"));
	// const [mensaje, setMensaje] = useState(data);

	//console.log("info", info);
	// state para checkbox izquierda
	const [checkIZ, setCheckIZ] = useState([]);
	const [checkDE, setCheckDE] = useState([]);

	const sendInfSubmit = e => {
		e.preventDefault();
		let storage_info = JSON.parse(localStorage.getItem("user_information"));
		if (storage_info.userDataReady == undefined) {
			alert("Aun hay datos del perfil que debe llenar");
		} else {
			let text = document.getElementById("Textarea1").value;
			//let checkIz = document.getElementById("checkboxMedicamentos").value;
			//let checkDe
			//console.log("check", checkIz);
			console.log("Prueba_Consulta: ", consulta);
			let consulta = "Mi consulta es sobre  " + checkIZ + "\n" + checkDE + " \n .Mi consulta es: \n " + text;
			console.log("Prueba_Consulta: ", consulta);

			let id = local.id;
			let usuario = id.toString();
			const data = {
				data: consulta
			};
			fetch(`https://3001-pink-cheetah-bj6f5blk.ws-us03.gitpod.io/api/farmainfo/${usuario}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data) //convierte data a string
			})
				.then(response => response.json())
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.log("Error", error);
				});
		}
	};
	// funcion para update el izquierdo
	const updateIZ = el => {
		console.log(el.target.value);
		// ver si el array ya contiene el valor
		if (checkIZ.includes(el.target.value)) {
			// quitar el valor del array con splice
			// splice necesita 2 argumentos, el index a borrar, y el 1 significa "borra un elemento"
			checkIZ.splice(checkIZ.indexOf(el.target.value), 1);
			setCheckIZ([...checkIZ]);
			console.log("remove", checkIZ);
		} else {
			checkIZ.push(el.target.value);
			setCheckIZ([...checkIZ]);
			console.log("add", checkIZ);
		}
	};
	// funcion para update de derecaha
	const updateDE = el => {
		console.log(el.target.value);
		// ver si el array ya contiene el valor
		if (checkDE.includes(el.target.value)) {
			// quitar el valor del array con splice
			// splice necesita 2 argumentos, el index a borrar, y el 1 significa "borra un elemento"
			checkDE.splice(checkDE.indexOf(el.target.value), 1);
			setCheckDE([...checkDE]);
			console.log("remove", checkDE);
		} else {
			checkDE.push(el.target.value);
			setCheckDE([...checkDE]);
			console.log("add", checkDE);
		}
	};

	return (
		<div className="jumbotron jumbotron-fluid bg-white">
			<img src={imagen} width="100%" style={{ borderRadius: "0%" }} />
			<br />
			<br />
			<br />

			<div className="container bg-light">
				<div className="row">
					<img src={imagen2} width="100%" style={{ borderRadius: "0%" }} />
				</div>
				<br />

				<form>
					<div className="row">
						<div className="col-6" id="checkConsulta">
							<div className="form-check">
								<h5>
									<strong>La consulta es sobre*</strong>
								</h5>
								<input
									className="form-check-input"
									type="checkbox"
									id="checkboxMedicamentos"
									value="Medicamentos"
									onChange={el => updateIZ(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Medicamentos</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="CheckboxEnfermendad"
									value="Enfermedades o padecimientos"
									onChange={el => updateIZ(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Enfermedades o padecimientos</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="CheckboxVidaEsti"
									value="Estilo de vida saludables"
									onChange={el => updateIZ(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Estilo de vida saludables</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="CheckboxParaMi"
									value="Para mi persona"
									onChange={el => updateIZ(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Para mi persona</label>
							</div>
						</div>
						<div className="col-6" id="columDerecha">
							<div className="form-check">
								<h5>
									<strong>La consulta es para*</strong>
								</h5>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="Para mi persona"
									onChange={el => updateDE(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Para mi persona</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="Para un familiar"
									onChange={el => updateDE(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Para un familiar</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="Para un paciente que cuido"
									onChange={el => updateDE(el)}
								/>
								<label className="form-check-label inlineCheckbox2">Para un paciente que cuido</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="No aplica"
									onChange={el => updateDE(el)}
								/>
								<label className="form-check-label inlineCheckbox2">No aplica</label>
							</div>

							<div className="form-group">
								<label className="Textarea1">Consulta</label>
								<textarea
									className="form-control"
									placeholder="Escribir consulta aqui para enviar..."
									id="Textarea1"
									rows="3"
								/>
								<button
									type="submit"
									className="btn btn-primary bg-info"
									onClick={e => sendInfSubmit(e)}>
									Enviar Consulta
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
