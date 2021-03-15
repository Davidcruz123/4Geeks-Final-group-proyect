import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/recovery.scss";

export const Recovery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<img
				src="https://lh3.googleusercontent.com/proxy/f9gOturveSV2An6uG4gt__JLfW8-nqj1uTgBdRcPW4Z25KTEGb5vizpTtuzrMBlVpK7qefoncWdG4JATAcSZg8y3JqJYmbSDKRUoIzkgjTaYjppZXnezKSs8F4kV5WtC8E1uvksoMdWbxtEo59Y
"
				width="40%"
				className="mx-auto d-block"
			/>

			<h1>Cambio Contrasena</h1>

			<form method="post" action="">
				<label className="newPassword">Nueva Contrasena:</label>
				<input type="password" id="newPassword" name="newPassword" required title="New password" />

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
			</form>
		</div>
	);
};
