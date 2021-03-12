import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/navbar.scss";
import imagen from "../../img/pharmaimg.jpg";

export const Navbar = () => {
	function myFunction() {
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
					<input className="form-control mb-40 mr-sm-2 col-10" type="text" placeholder="Buscar Medicamento" />

					<div className="dropdown2">
						<i className="fas fa-search dropbtn2 " onClick={() => myFunction()} />
						<div id="myDropdown" className="dropdown-content2">
							<a href="#home">Home</a>
							<a href="#about">About</a>
							<a href="#contact">Contact</a>
						</div>
					</div>

					{/* <div className="col-2">
						<div className="dropdown">
							<i
								className="fas fa-search fa-2x dropdown-toggle"
								type="button"
								id="dropdownMenu2"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							/>

							<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
								<button className="dropdown-item" type="button">
									Action
								</button>
								<button className="dropdown-item" type="button">
									Another action
								</button>
								<button classNAme="dropdown-item" type="button">
									Something else here
								</button>
							</div>
						</div>
					</div> */}
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
