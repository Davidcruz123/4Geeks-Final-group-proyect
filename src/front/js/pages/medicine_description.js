import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Descripcion = () => {
	const { store, actions } = useContext(Context);
	const id_de_medicina = useParams();

	let storage_info = JSON.parse(localStorage.getItem("user_information"));
	if (storage_info.estado == "search") {
		if (storage_info.medicine_info.data[id_de_medicina.id] == undefined) {
			var {
				principio_activo,
				respuesta_1,
				respuesta_2,
				respuesta_3,
				respuesta_4,
				respuesta_5,
				respuesta_6,
				respuesta_7
			} = storage_info.medicine_info.data;
		} else {
			var {
				principio_activo,
				respuesta_1,
				respuesta_2,
				respuesta_3,
				respuesta_4,
				respuesta_5,
				respuesta_6,
				respuesta_7
			} = storage_info.medicine_info.data[id_de_medicina.id];
		}
	} else {
		var {
			principio_activo,
			respuesta_1,
			respuesta_2,
			respuesta_3,
			respuesta_4,
			respuesta_5,
			respuesta_6,
			respuesta_7
		} = storage_info.medicine_info[id_de_medicina.id];
	}
	let principio_activo_1 = principio_activo[0].toLocaleUpperCase() + principio_activo.slice(1);
	return (
		<div className="container bg-light">
			<div className="row-fluid" />
			<p className="text-center bg-primary">
				<h1>
					<strong>{principio_activo_1}</strong>
				</h1>
			</p>
			<div className="row">
				<div className="col-6">
					<p>
						<strong>¿Para cuales condiciones o enfermedades se prescribe este medicamento?</strong>
					</p>
					<ul>
						<li>{respuesta_1}</li>
					</ul>
				</div>

				<div className="row col-6">
					<p>
						<strong>¿Qué otro uso se le da a este medicamento?</strong>
					</p>
					<ul>
						<li>{respuesta_2}</li>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />

			<div className="row">
				<div className="col-6">
					<p>
						<strong>¿Cuáles son los efectos secundarios que podría provocar este medicamento?</strong>
					</p>
					<ul>
						<li>{respuesta_3}</li>
					</ul>
				</div>

				<div className="row col-6 text-rigth">
					<p>
						<strong>¿Qué debo hacer en caso de una sobredosis?</strong>
					</p>
					<ul>
						<li>{respuesta_4}</li>
					</ul>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="row">
				<div className="col-6">
					<p>
						<strong>¿Cómo se debe usar este medicamento?</strong>
					</p>
					<ul>
						<li>{respuesta_5}</li>
					</ul>
				</div>

				<div className="row col-6 text-rigth">
					<p>
						<strong>¿Cómo debo almacenar o desechar este medicamento?</strong>
					</p>
					<ul>
						<li>{respuesta_6}</li>
					</ul>
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
			<div className="row-fluid" />
			<p className="text-center bg-primary">
				<h5 className="text-warning">
					<strong>Nombres Comerciales</strong>
				</h5>
			</p>
		</div>
	);
};
