import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import imagen from "../../img/medicine_consultation.jpg";
// import "../../styles/medicine_consultation.scss";
import { Link } from "react-router-dom";

export const Consulta = () => {
	const { store, actions } = useContext(Context);
	const [lista_medicamentos, setListaMedicamentos] = useState([{ principio_activo: "Loading" }]);

	useEffect(() => {
		get_all_medicines();
	}, []);

	const get_all_medicines = () => {
		// fetch("http://127.0.0.1:5000" + "/api/medicamentos")
		fetch("http://127.0.0.1:5000" + "/medicamentos")
			.then(resp => resp.json())
			.then(data => {
				// setStore({ medicines: data });
				console.log(data, "linea");
				setListaMedicamentos(data);

				let nuevo_storage = {
					...JSON.parse(localStorage.getItem("user_information")),
					medicine_info: data,
					estado: "medicine"
				};
				let infostorage = localStorage.setItem("user_information", JSON.stringify(nuevo_storage));
				console.log("storage ahora con medicina", JSON.parse(localStorage.getItem("user_information")));
			})
			.catch(error => {
				console.log("Error loading message from backend XXXX", error);
			});
	};

	return (
		<div className="jumbotron jumbotron-fluid bg-white">
			<img src={imagen} width="100%" style={{ borderRadius: "0%" }} />
			<div className="container" />
			<div className="align-items-center text-center">
				<div className="d-flex">
					<div className="container" style={{ backgroundColor: "#002E5D" }}>
						<div className="row">
							<div className="col-6 ">
								<div className="card">
									<div className="card">
										<div className="card">
											<img
												src="https://c0.wallpaperflare.com/preview/661/131/640/pharmacist-pharmacy-medicine-man.jpg"
												className="card-img-top"
												alt="..."
											/>
											<div className="card-body bg-light">
												<p className="card-text text-white" />
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-6 ">
								<div className="card">
									<h2>Lista Medicamentos con mas consultas</h2>
									<br />
									<div className="row">
										<div className="col-6">
											<ul className="text-left">
												{lista_medicamentos.map((elemento, index) => {
													return (
														<Link to={"/medicine_description/" + index} key={index}>
															<li key={index} className="text-dark">
																{elemento.principio_activo}
															</li>
														</Link>
													);
												})}
											</ul>
											<br />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
