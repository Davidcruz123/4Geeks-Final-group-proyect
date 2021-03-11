import React, { Component } from "react";
import "../../img/pharma-redes.jpeg";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>
			<a href="https://www.facebook.com/El-Farmac%C3%A9utico-Online-116143110180817">
				<img src="/../../pharma-redes.jpeg" />
			</a>
		</div>
		<div className="row footerIconos">
			<p>Made by</p>
		</div>
		<div className="row d-flex justify-content-center text-center">
			<a className="col-2" href="https://github.com/Samo3021">
				Samuel Campos <i className="fab fa-github" />
			</a>
			<a className="col-2" href="https://github.com/Davidcruz123">
				David Cruz <i className="fab fa-github" />
			</a>
			<a className="col-2" href="https://github.com/jhumphreys-p">
				Jonnathan Humphreys <i className="fab fa-github" />
			</a>
			<a className="col-2" href="https://github.com/CarlosLastre">
				Carlos Lastres <i className="fab fa-github" />
			</a>
		</div>
		<div className="row slogan d-felx align-items-center">
			<span>All rights reserved. 2021 Pharma-Help. San José, Costa Rica</span>
		</div>
	</footer>
);
