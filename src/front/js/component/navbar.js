import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<div className="col-3">
					<Link to="/home">
						<img src="https://browser-red-aardvark-0k6zc0as.ws-us03.gitpod.io/workspace/4Geeks-Final-group-proyect/src/front/img/image%20Pharma.JPG" />
					</Link>
				</div>
				<form className="bd-search d-flex align-items-center" action="/home">
					<input className="form-control mb-40 mr-sm-2" type="text" placeholder="Buscar Medicamento" />

					<i className="fas fa-search fa-2x" />
				</form>
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
