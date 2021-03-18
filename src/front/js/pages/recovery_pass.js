import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/recovery.scss";
import { Link, Redirect } from "react-router-dom";

export const Recovery = () => {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);
	const [passw, setPassw] = useState("");

	const registeSubmit = e => {
		e.preventDefault();

		let pass = document.getElementById("newPassword").value;
		let pass2 = document.getElementById("confirmPassword").value;

		if (pass == pass2) {
			const data = {
				password: pass
			};
			let id_recuperacion = store.idrecuperacion.toString();
			let url = "http://127.0.0.1:5000/users/actualizarcontrasena/" + id_recuperacion;

			fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data) //convierte data a string
			})
				.then(response => response.json())
				.then(data => {
					console.log(data);
					alert("El password fue actualizado correctamente");
					setRedirect(true);
				})
				.catch(error => {
					console.log("Error", error);
				});
		} else {
			alert("El password no coincide");
		}
	};

	return (
		<div className="container">
			<img
				src="https://lh3.googleusercontent.com/proxy/f9gOturveSV2An6uG4gt__JLfW8-nqj1uTgBdRcPW4Z25KTEGb5vizpTtuzrMBlVpK7qefoncWdG4JATAcSZg8y3JqJYmbSDKRUoIzkgjTaYjppZXnezKSs8F4kV5WtC8E1uvksoMdWbxtEo59Y
"
				width="40%"
				className="mx-auto d-block"
			/>

			<h1>Cambio Contrasena</h1>

			<form method="post" action="/action_page.php" onSubmit={e => registeSubmit(e)}>
				<label className="newPassword">Nueva Contrasena:</label>
				<input
					type="password"
					id="newPassword"
					name="newPassword"
					required
					title="New password"
					onChange={evento => {
						setPassw(evento.target.value);
					}}
					value={passw}
				/>
				<label className="confirmPassword">Confirmar Contrasena:</label>
				<input
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					required
					title="Confirm new password"
				/>
				<p className="form-actions">
					<input type="submit" value="Completar cambio contrasena" title="Change password" />
				</p>
				{redirect ? <Redirect to="/login" /> : ""}
			</form>
		</div>
	);
};
