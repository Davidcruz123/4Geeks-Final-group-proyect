import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/buscar_medicamentos.scss";
import imagen from "../../img/buscar_medicamentos.jpg";
import imagen2 from "../../img/medicamentos2.jpg";
export const Medicamentos = () => {
	const { store, actions } = useContext(Context);

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
						<div className="col-6">
							<div className="form-check">
								<h5>
									<strong>La consulta es sobre*</strong>
								</h5>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Medicamentos</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Enfermedades o padecimientos</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Estilo de vide saludables</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Para mi persona</label>
							</div>
						</div>
						<div className="col-6">
							<div className="form-check">
								<h5>
									<strong>La consulta es para*</strong>
								</h5>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Para mi persona</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Para un familiar</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">Para un paciente que cuido</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
								<label className="form-check-label inlineCheckbox2">No aplica</label>
							</div>

							<div className="form-group">
								<label className="exampleFormControlTextarea1">Consulta:</label>
								<textarea
									className="form-control"
									placeholder="Escribir consulta aqui para enviar..."
									id="exampleFormControlTextarea1"
									rows="3"
								/>
								<button type="submit" className="btn btn-primary bg-info">
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
