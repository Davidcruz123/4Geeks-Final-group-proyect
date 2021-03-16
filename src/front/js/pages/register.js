import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.scss";
import { Link, Redirect } from "react-router-dom";

export const Register = () => {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);

	const registeSubmit = e => {
		e.preventDefault();

		let name = document.getElementById("inputName").value;
		let email = document.getElementById("inputEmail").value;
		let pass = document.getElementById("inputPassword").value;

		const data = {
			name: name,
			email: email,
			password: pass
		};
		fetch("https://3001-orange-gayal-yfume403.ws-us03.gitpod.io/api/register", {
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
					console.log("Usuario agregado correctamente");
				} else {
					console.log(data.msj);
				}
			})
			.catch(error => {
				console.log("Error", error);
			});
	};
	return (
		<div className="container-sm">
			<form action="/action_page.php" onSubmit={e => registeSubmit(e)}>
				<div className="container">
					<img
						src="https://i.pinimg.com/originals/f4/4d/bc/f44dbcb8f4bb51d91a846a0c502c2f9b.gif"
						width="30%"
						className="float-rigth"
					/>
					<br />
					<br />
					<br />

					<h1>Registro</h1>

					<p>Por favor llenar esta forma para poder crear una cuenta</p>
					<div>
						<label className="Nombre">
							<b>Nombre</b>
						</label>
						<input type="text" placeholder="Nombre" name="inputName" id="inputName" required />
					</div>
					<div className="form-row">
						<div className="form-group col-md-12 font-weight-bold">
							<label className="inputEmail4">Email</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail"
								placeholder="Enter Email"
								required
							/>
						</div>
					</div>
					<div>
						<label className="Contrasena">
							<b> Constrasena</b>
						</label>
						<input
							type="password"
							placeholder=" Constrasena"
							name="inputPassword"
							id="inputPassword"
							required
						/>
					</div>

					<p>
						Al crear esta cuenta usted acepta terminos y condiciones <a href="#">Terms & Privacy</a>.
					</p>

					<input type="submit" className="btn btn-primary" value="Register" />
				</div>
				{redirect ? <Redirect to="/login" /> : ""}
				<div className="container signin">
					<p>
						Cuenta con cuenta de inicio? <Link to="/login">Sign in</Link>
					</p>
				</div>
			</form>
		</div>
	);
};

{
	/* <Link to = ""></Link> Sign in*/
}
