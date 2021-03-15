import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Descripcion = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-light">
			<div className="row-fluid" />
			<p className="text-center bg-primary">
				<h1>
					<strong>MEDICAMENTO</strong>
				</h1>
			</p>
			<div className="row">
				<div className="col-6">
					<p>
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
					</ul>
				</div>

				<div className="row col-6">
					<p>
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
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
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
					</ul>
				</div>

				<div className="row col-6 text-rigth">
					<p>
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
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
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
					</ul>
				</div>

				<div className="row col-6 text-rigth">
					<p>
						<strong>Para cuales condiciones o enfermedades se prescribe este medicamento</strong>
					</p>
					<ul>
						<li>opcion 1</li>
						<li>opcion 2</li>
						<li>opcion 3</li>
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
