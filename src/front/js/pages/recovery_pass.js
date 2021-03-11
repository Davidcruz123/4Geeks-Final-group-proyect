import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/recovery.scss";

export const Recovery = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<img
				src="https://lh3.googleusercontent.com/proxy/OYDJt5V_zdCTrzdxHSa7KUKMmse2ozuTsmcJq1cPceK5W-T2Hjf5EpgNCSE8c0wMjLFrABnZ1krtVbVWHMQkkyEf3cujjbt_N94T2GVjsze5VZK-kAaT2zcVj6k6RC5GYy3m4NDNZORYS_wKjOA"
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
