import React, { Component } from "react";
import "../../img/redessociales.png";
import "../../styles/footer.scss";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div>
			<a href="https://browser-harlequin-dog-v413dqz1.ws-us03.gitpod.io/workspace/4Geeks-Final-group-proyect/src/front/img/redessociales.png">
				<img src="/../../redessociales.png" />
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
