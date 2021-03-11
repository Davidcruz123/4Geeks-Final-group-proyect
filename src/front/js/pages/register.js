import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.scss";

export const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-sm">
			<form action="/action_page.php">
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

					<label className="email">
						<b>Correo</b>
					</label>
					<input type="text" placeholder="Correo" name="email" id="email" required />

					<label className="psw">
						<b>Constrasena</b>
					</label>
					<input type="password" placeholder="Contrasena" name="psw" id="psw" required />

					<label className="psw-repeat">
						<b>Repetir Constrasena</b>
					</label>
					<input
						type="password"
						placeholder="Repetir Constrasena"
						name="psw-repeat"
						id="psw-repeat"
						required
					/>
					<p>
						Al crear esta cuenta usted acepta terminos y condiciones <a href="#">Terms & Privacy</a>.
					</p>

					<button type="submit" className="btn btn-primary">
						Registro
					</button>
				</div>

				<div className="container signin">
					<p>
						Cuenta con cuenta de inicio?{" "}
						<a href="https://3000-harlequin-dog-v413dqz1.ws-us03.gitpod.io/login">Sign in</a>.
					</p>
				</div>
			</form>
		</div>
	);
};
