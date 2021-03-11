import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
// import "../../img/GIF-queremos.gif";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-sm">
			<form action="action_page.php" method="post">
				<div className="text-center">
					<br />
					<br />
					<img
						src="https://browser-red-aardvark-0k6zc0as.ws-us03.gitpod.io/workspace/4Geeks-Final-group-proyect/src/front/img/GIF-queremos.gif"
						alt="Avatar"
						className="rounded mx-auto d-block"
						width="40%"
					/>
				</div>

				<div className="container">
					<label className="name">
						<b>Correo de Usuario</b>
					</label>
					<input type="text" placeholder="Correo de Usuario" name="name" required />

					<label className="psw">
						<b>Contrasena</b>
					</label>
					<input type="password" placeholder="Contrasena" name="psw" required />

					<button type="submit" className="btn btn-primary">
						Acceso
					</button>
					<label>
						<input type="checkbox" checked="checked" name="remember" /> Recordarme
					</label>
				</div>

				<div className="container">
					<button type="submit" className="btn btn-primary">
						Cancelar
					</button>
					<span className="psw">
						Olvido{" "}
						<a href="https://3000-harlequin-dog-v413dqz1.ws-us03.gitpod.io/recovery_pass1">contrasena?</a>
					</span>
				</div>
			</form>
		</div>
	);
};
