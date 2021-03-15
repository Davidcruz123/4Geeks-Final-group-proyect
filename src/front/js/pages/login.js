import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";
import { Redirect } from "react-router-dom";
import { gif } from "../../img/GIFqueremos.gif";
export const Login = () => {
	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState(false);

	const loginSubmit = e => {
		e.preventDefault();

		let email = document.getElementById("inputEmail").value;
		let pass = document.getElementById("inputPassword").value;

		const data = {
			email: email,
			password: pass
		};

		fetch("https://3001-copper-lemur-lq8jolvu.ws-us03.gitpod.io/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data) //convierte data a string
		})
			.then(response => response.json())
			.then(data => {
				console.log("LOGIN", data);
				if (data.status == "succesfull") {
					console.log("Usuario logueado correctamente");
					let session_info = {
						token: data.data.token,
						id: data.data.user.id,
						userinf: data.data.user
					};
					console.log("session_info", session_info);
					localStorage.setItem("user_information", JSON.stringify(session_info)); //esta es una variable que se guarda a nivel de browser
					console.log("data", data);
					console.log(localStorage);
					//fetch2(data.user.id, data.user);

					console.log("STORE", store);

					setRedirect(true); // para que redirect funcione se debe renderizar la pagina de nuevo, para eso usamos este hook
					console.log("en teoria ya se hizo el redirect");
				} else {
					console.log(data.msj); //me tira indefinido(lo psuo Samuel)
				}
			})
			.catch(error => {
				console.log("Error", error);
			});
	};

	return (
		<div className="container-sm">
			<form action="action_page.php" onSubmit={e => loginSubmit(e)}>
				<div className="text-center">
					<br />
					<br />
					<img
						src="https://browser-blush-spider-pop272c7.ws-us03.gitpod.io/workspace/4Geeks-Final-group-proyect/src/front/img/GIFqueremos.gif"
						alt="Avatar"
						className="rounded mx-auto d-block"
						width="40%"
					/>
				</div>

				<div className="container">
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
					<div className="form-row">
						<div className="form-group col-md-12 font-weight-bold">
							<label className="inputPassword4">Password</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								placeholder="Enter Password"
								required
							/>
						</div>
					</div>
					<p className="text-danger">
						La contrasena que ha introducido es incorrecta. Has olvidado la contrasena?
					</p>
					<input type="submit" className="btn btn-primary" value="Acceso" />
					{/* {redirect ? <Redirect to="/user_view" /> : ""} */}
					<label>
						<input type="checkbox" checked="checked" name="remember" /> Recordarme
					</label>
				</div>

				<div className="container">
					<Link to="/register">
						<button type="submit" className="btn btn-primary">
							Cancelar
						</button>
					</Link>
					<span className="psw">
						Olvido <Link to="/recovery_pass1">contrasena?</Link>
					</span>
				</div>
			</form>
			{redirect ? <Redirect to="/user_view" /> : ""}
		</div>
	);
};

{
	/* <Link to = ""></Link> Sign in  contrasena? <Link to = "/recovery_pass1">contrasena?</Link>*/
}
