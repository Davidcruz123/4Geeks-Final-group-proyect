import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/recovery.scss";
import { Link, Redirect } from "react-router-dom";

export const Recovery1 = () => {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);
	const [newcode, setNewcode] = useState("");
	const [codecheck, setCodecheack] = useState("");

	//const prueba = store.correorecuperacion;
	//let prueba = store.correoreuperacion;
	//console.log("probando : ", prueba);

	const recoverypass1 = e => {
		e.preventDefault();

		let getcode = document.getElementById("addCode").value;
		let getcheck = document.getElementById("checkCode").value;
		//let usuario = correo.email;
		//console.log("addcode :", addcode, "checkcode =>", checkCode);
		let addcode = parseInt(getcode);
		let checkCode = parseInt(getcheck);
		//console.log("prueba de int", addcode);
		//console.log("usuario : ", usuario);

		if (addcode == checkCode) {
			let email = store.correorecuperacion;
			const data = {
				code: addcode
			};

			fetch(`https://3001-magenta-orca-okjcs666.ws-us03.gitpod.io/api/users/recovery/${email}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data) //convierte data a string
			})
				.then(response => response.json())
				.then(data => {
					console.log(data);
					if (data.status == "success") {
						setRedirect(true); // para que redirect funcione se debe renderizar la pagina de nuevo, para eso usamos este hook
						console.log("Nuevo codigo colocado");
						let idDeRecuperacion = data.id;
						actions.recuperacion(idDeRecuperacion);
					} else {
						console.log(data.msj); //None
						alert("Has usado un código incorrecto");
					}
				})
				.catch(error => {
					console.log("Error", error);
				});
		} else {
			alert("Los codigos no son iguales");
		}
	};

	return (
		<div className="container">
			<img
				src="https://spainbox.com/mailboxes/wp-content/uploads/2016/10/health-pharmacy-warehouse-spain.gif"
				width="40%"
				className="mx-auto d-block"
				style={{ borderRadius: "0%" }}
			/>

			<h1>Confirmacion cambio contraseña</h1>

			<form method="post" onSubmit={e => recoverypass1(e)}>
				<label className="nueva_clave">Brindar codigo de recuperacion de clave enviado al correo</label>
				<input
					type="text"
					id="addCode"
					name="nueva_clave"
					required
					title="Code"
					onChange={evento => {
						setNewcode(evento.target.value);
					}}
					value={newcode}
				/>

				<label className="nueva_clave1">Confirmar Codigo</label>
				<input
					type="text"
					id="checkCode"
					name="nueva_clave1"
					required
					title="Confirm the code"
					onChange={evento => {
						setCodecheack(evento.target.value);
					}}
					value={codecheck}
				/>

				<p className="form-actions">
					<input type="submit" value="Cambio Contrasena" title="Change password" />
				</p>
				{redirect ? <Redirect to="/recovery_pass" /> : ""}
			</form>
		</div>
	);
};
