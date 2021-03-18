import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import "../../styles/register.scss";
export const Password = () => {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);
	const [email, setEmail] = useState("");

	const registeSubmit = e => {
		e.preventDefault();

		// fetching data from the backend
		//let usuario = email

		let data = { email: email };
		fetch("http://127.0.0.1:5000/restore_password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data) //convierte data a string
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data);

				actions.guardar_correo_recuperacion(email);
				console.log("mensaje de prueba", data.status, data.status == "The code has been sent");
				if (data.status == "success") {
					setRedirect(true);
					console.log("estoy aca");
				} else {
					alert("Usuario no existe");
					console.log("estoy alla");
				}
			})
			.catch(error => console.log("Error loading message from backend", error));
	};
	return (
		<div className="container">
			<div className="card text-center m-auto" style={{ width: "30rem" }}>
				<div className="card-body">
					<form action="/action_page.php" onSubmit={e => registeSubmit(e)}>
						<img
							src="https://i.pinimg.com/originals/f4/4d/bc/f44dbcb8f4bb51d91a846a0c502c2f9b.gif"
							width="30%"
							className="float-rigth mt-4"
						/>
						<br />
						<br />
						<br />
						<h1>Password Assistance</h1>
						<p>Enter the email address associate with your Pharma Help account. </p>
						<div className="form-row">
							<div className="form-group col-md-12 font-weight-bold text-left p-4">
								<label className="text-lef">Email</label>
								<input
									type="email"
									className="form-control"
									id="inputEmail"
									placeholder="Enter Email"
									required
									// value="Email"
									// onClick={value => actions.sendCode(value)}
									onChange={evento => {
										setEmail(evento.target.value);
									}}
									value={email}
								/>
							</div>
						</div>
						<input type="submit" className="btn btn-primary m-2" value="Continue" />

						{redirect ? <Redirect to="/recovery_pass1" /> : ""}

						<div className="container signin">
							<p>
								If you no longer use the emial address associate with your Pharma Help account, you may
								contact Customer Service for help restoring access to your account
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

{
	/* <Link to = ""></Link> Sign in <input type="submit" className="btn btn-primary" value="Continue" />*/
}
