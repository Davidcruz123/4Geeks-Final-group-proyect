import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import imagen from "../../img/consulta_medicamento.jpg";

export const Consulta = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid bg-white">
			<img src={imagen} width="100%" />

			<div className="container">
				<button type="submit" className="btn btn-primary bg-info">
					Enviar Consulta
				</button>
			</div>
		</div>
	);
};
