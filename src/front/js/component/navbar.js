import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/navbar.scss";
import imagen from "../../img/pharmaimg.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [resultados_busqueda, setResultados_busqueda] = useState([
		{
			principio_activo: ""
		}
	]);

	const [redirect, setRedirect] = useState(false);
	const [linkUser, setLinkUser] = useState("/user_view");

	if (JSON.parse(localStorage.getItem("user_information")) != undefined && store.userlogueado == false) {
		//cuando existe local y userlogueado es false, modificamos el storage
		actions.usuariologin();
		console.log(store.userlogueado, "linea 22");
		console.log("estoy cambiando estado a true");
	}

	const cerrarSesion = () => {
		localStorage.removeItem("user_information");
		// window.location.reload();
		actions.usuariologout();
	};

	const cambiarLinkUser = () => {
		if (store.userlogueado == false) {
			setLinkUser("/login");
			console.log("El link es login");
		} else {
			setLinkUser("/user_view");
			console.log("el link es user_view");
		}
	};
	useEffect(
		() => {
			console.log(store.userlogueado, "ESTOY VIENDO EN QUE ESTADO ESTA USER LOGUEADO");
			cambiarLinkUser();
			console.log("SE APLICÓ EL USER EFECT");
		},
		[store.userlogueado]
	);

	function myFunction() {
		setRedirect(false);
		getinformation();

		document.getElementById("myDropdown").classList.toggle("show");

		console.log("click");
	}

	window.onclick = function(event) {
		if (!event.target.matches(".dropbtn2")) {
			var dropdowns = document.getElementsByClassName("dropdown-content2");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains("show")) {
					openDropdown.classList.remove("show");
				}
			}
		}
	};

	const getinformation = () => {
		let medicamento_url = document.getElementById("searchmedicine").value;
		let url = "http://127.0.0.1:5000/medicines/" + medicamento_url;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log("obtener medicamentos", data);
				if (data.status == "success") {
					console.log("Success", redirect);

					let nuevo_storage = {
						...JSON.parse(localStorage.getItem("user_information")),
						medicine_info: data,
						estado: "search"
					};
					let infostorage = localStorage.setItem("user_information", JSON.stringify(nuevo_storage));
					console.log("storage ahora con medicina", JSON.parse(localStorage.getItem("user_information")));

					if (data.msg == "were you trying to say:") {
						console.log("voy bien", data.data);
						setResultados_busqueda(data.data); //es una lista de objetos.. lo que ocupo es la marca comercial
						setRedirect(false);
					} else {
						console.log("voy bien 2", data.data);
						setResultados_busqueda([data.data]);
						if (redirect == true) {
							setRedirect(false);
						}
						setRedirect(true);
					}
				} else {
					console.log("algun error");
					setResultados_busqueda([{ principio_activo: "" }]);
					// setLink("/");
				}
			})
			.catch(error => {
				console.log("Error", error);
				setResultados_busqueda([{ principio_activo: "" }]);
				console.log(resultados_busqueda, "resultados busqueda");
				setRedirect(false);
			});
	};

	if (JSON.parse(localStorage.getItem("user_information")) != null) {
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<div className="col-3">
						<Link to="/home">
							<img src={imagen} style={{ borderRadius: "0%" }} />
						</Link>
					</div>
					{/* <form className="bd-search d-flex align-items-center" action="/home">
					<input className="form-control mb-40 mr-sm-2" type="text" placeholder="Buscar Medicamento" />

					<i className="fas fa-search fa-2x" />
				</form> */}

					<div className="row  d-flex">
						<input
							className="form-control mb-40 mr-sm-2 col-8"
							type="text"
							placeholder="Buscar Medicamento"
							id="searchmedicine"
						/>

						<div className="dropdown2">
							<i className="fas fa-search dropbtn2 " onClick={() => myFunction()} />
							<div id="myDropdown" className="dropdown-content2">
								{resultados_busqueda[0].principio_activo == "" ? (
									<a href="#home">El medicamento no se encontró</a>
								) : (
									resultados_busqueda.map((elemento, index) => {
										return (
											<Link to={"/medicine_description/" + index} key={index}>
												<a key={index} href="#home">
													{elemento.principio_activo}
												</a>
											</Link>
										);
									})
								)}
							</div>
						</div>
					</div>

					<div className="col-1">
						<div className="dropdown">
							<button className="dropbtn">
								<i className="fas fa-bars fa-2x" /> Menu
							</button>
							<div className="dropdown-content">
								<Link to={linkUser}>
									<a href="#">Perfil Usuario</a>
								</Link>

								<Link to="/parmacy_consultation">
									<a href="#">Consulta Farmaceutica</a>
								</Link>
								<Link to="/medicine_consultation">
									<a href="#">Lista de medicamentos</a>
								</Link>

								<Link
									to="/login"
									onClick={() => {
										cerrarSesion();
									}}>
									Cerrar session
									{/* </a> */}
								</Link>
							</div>
						</div>
					</div>
					<div className="nav navbar-nav navbar-right">
						<Link to="/register">
							<a href="#">
								<i className="fas fa-sign-in-alt text-white fa-lg" margin-right="150px" />
								<span className="text-white">Sign Up</span>
							</a>
						</Link>

						<Link to="/login">
							<a href="#">
								<i className="fas fa-power-off text-white fa-lg" margin-right="150px" />
								<span className="text-white">Login</span>
							</a>
						</Link>
					</div>
				</div>

				<div />
				{redirect ? <Redirect to="/medicine_description/0" /> : ""}
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<div className="col-3">
						<Link to="/home">
							<img src={imagen} style={{ borderRadius: "0%" }} />
						</Link>
					</div>
					{/* <form className="bd-search d-flex align-items-center" action="/home">
					<input className="form-control mb-40 mr-sm-2" type="text" placeholder="Buscar Medicamento" />

					<i className="fas fa-search fa-2x" />
				</form> */}

					<div className="row  d-flex">
						<input
							className="form-control mb-40 mr-sm-2 col-8"
							type="text"
							placeholder="Buscar Medicamento"
							id="searchmedicine"
						/>

						<div className="dropdown2">
							<i className="fas fa-search dropbtn2 " onClick={() => myFunction()} />
							<div id="myDropdown" className="dropdown-content2">
								{resultados_busqueda[0].principio_activo == "" ? (
									<a href="#home">El medicamento no se encontró</a>
								) : (
									resultados_busqueda.map((elemento, index) => {
										return (
											<Link to={"/medicine_description/" + index} key={index}>
												<a key={index} href="#home">
													{elemento.principio_activo}
												</a>
											</Link>
										);
									})
								)}
							</div>
						</div>
					</div>

					<div className="col-1">
						<div className="dropdown">
							<button className="dropbtn">
								<i className="fas fa-bars fa-2x" /> Menu
							</button>
							<div className="dropdown-content">
								<Link to={linkUser}>
									<a href="#">Perfil Usuario</a>
								</Link>

								<Link to="/parmacy_consultation">
									<a href="#">Consulta Farmaceutica</a>
								</Link>
								<Link to="/medicine_consultation">
									<a href="#">Lista de medicamentos</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="nav navbar-nav navbar-right">
						<Link to="/register">
							<a href="#">
								<i className="fas fa-sign-in-alt text-white fa-lg" margin-right="150px" />
								<span className="text-white">Sign Up</span>
							</a>
						</Link>

						<Link to="/login">
							<a href="#">
								<i className="fas fa-power-off text-white fa-lg" margin-right="150px" />
								<span className="text-white">Login</span>
							</a>
						</Link>
					</div>
				</div>

				<div />
				{redirect ? <Redirect to="/medicine_description/0" /> : ""}
			</nav>
		);
	}
};
