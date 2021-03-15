import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/portadareal.jpeg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1 />
			<p>
				<img src={rigoImageUrl} style={{ borderRadius: "0%" }} />
			</p>
			<div className="ml-auto">
				<button className="btn btn-primary">Buscar Medicamentos</button>
			</div>
			<div className="ml-auto">
				<button className="btn btn-primary">Consulta Farmacéutica</button>
			</div>
			<div className="alert alert-info">
				{store.message ||
					"Consulte con su Médico o Farmacéutico de confianza si presenta algún efecto secundario con sus medicametos o tiene alguna duda sobre ellos"}
			</div>
			<p>En caso de emergencia llamar al 911 </p>
		</div>
	);
};
