import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/navbar.scss";
import imagen from "../../img/pharmaimg.jpg";

export const Navbar = () => {
	const [resultados_busqueda, setResultados_busqueda] = useState([
		{
			principio_activo: "El medicamento no se encontró"
		}
	]);

	const [link, setLink] = useState("/");

	function myFunction() {
		getinformation();
		document.getElementById("myDropdown").classList.toggle("show");
		console.log("click");
	}

	const getinformation = () => {
		let medicamento_url = document.getElementById("searchmedicine").value;
		let url = "https://3001-purple-dingo-0a9foose.ws-us03.gitpod.io/api/medicines/" + medicamento_url;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log("obtener medicamentos", data);
				if (data.status == "success") {
					console.log("Success");
					if (data.msg == "were you trying to say:") {
						console.log("voy bien", data.data);
						setResultados_busqueda(data.data); //es una lista de objetos.. lo que ocupo es la marca comercial
						setLink("/login");
					}
					//                     //     console.log("voy bien")were you trying to say"""==data.msg
					// ()){}}					// let session_info = {
					// 	token: data.token,
					// 	id: data.user.id
					// };

					// localStorage.setItem("user_information", JSON.stringify(session_info)); //esta es una variable que se guarda a nivel de browser

					// console.log(localStorage);
					// fetch2(data.user.id, data.user);

					// console.log("STORE", store);

					// setRedirect(true); // para que redirect funcione se debe renderizar la pagina de nuevo, para eso usamos este hook
					// console.log("en teoria ya se hizo el redirect");
				} else {
					console.log("algun error");
					setResultados_busqueda([{ principio_activo: "El medicamento no se encontró" }]);
					setLink("/");
				}
			})
			.catch(error => {
				console.log("Error", error);
				setResultados_busqueda([{ principio_activo: "El medicamento no se encontró" }]);
				console.log(resultados_busqueda);
				setLink("/");
			});
	};

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

				<div className="row bg-secondary d-flex">
					<input
						className="form-control mb-40 mr-sm-2 col-10"
						type="text"
						placeholder="Buscar Medicamento"
						id="searchmedicine"
					/>

					<div className="dropdown2">
						<i className="fas fa-search dropbtn2 " onClick={() => myFunction()} />
						<div id="myDropdown" className="dropdown-content2">
							{resultados_busqueda.map((elemento, index) => {
								return (
									<Link to={link} key={index}>
										<a key={index} href="#home">
											{elemento.principio_activo}
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</div>

				<div className="col-1">
					<div className="dropdown">
						<button className="dropbtn">
							<i className="fas fa-bars fa-2x" /> Menu
						</button>
						<div className="dropdown-content">
							<Link to="/user_view">
								<a href="#">Perfil Usuario</a>
							</Link>

							<a href="https://jonnathanhumphreys.wixsite.com/4geeks/consulta-farmac%C3%A9utica">
								Consulta Farmaceutica
							</a>

							{/* <Link to="/">
								<a href="https://jonnathanhumphreys.wixsite.com/4geeks/covid-19">Covid 19</a>
							</Link> */}

							{/* <a href="https://jonnathanhumphreys.wixsite.com/4geeks/medicamentos">Medicamentos</a> */}
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
		</nav>
	);
};
