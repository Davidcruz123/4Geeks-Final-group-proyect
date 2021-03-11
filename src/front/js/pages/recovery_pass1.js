import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/recovery.scss";
import { Link } from "react-router-dom";

export const Recovery1 = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<img
				src="https://spainbox.com/mailboxes/wp-content/uploads/2016/10/health-pharmacy-warehouse-spain.gif"
				width="40%"
				className="mx-auto d-block"
			/>

			<h1>Confirmacion cambio contraseña</h1>

			<form method="post" action="">
				<label className="nueva_clave">Brindar codigo de recuperacion de clave enviado al correo</label>
				<input type="password" id="newPassword" name="nueva_clave" required title="New password" />

				<label className="nueva_clave1">Confirmar Codigo</label>
				<input type="password" id="confirmPassword" name="nueva_clave1" required title="Confirm new password" />

				<p className="form-actions">
					<input type="submit" value="Cambio Contrasena" title="Change password" />
					<Link to="/recovery_pass" />
				</p>
			</form>
		</div>
	);
};
