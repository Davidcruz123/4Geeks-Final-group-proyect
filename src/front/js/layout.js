import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Recovery } from "./pages/recovery_pass";
import { Recovery1 } from "./pages/recovery_pass1";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { User } from "./pages/user_view";
import { Footer } from "./component/footer";
import { Medicamentos } from "./pages/consulta_farmacia.js";
import { Descripcion } from "./pages/medicine_description.js";
import { Consulta } from "./pages/medicine_consultation";
import { Password } from "./pages/password";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/user_view">
							<User />
						</Route>
						<Route exact path="/recovery_pass">
							<Recovery />
						</Route>
						<Route exact path="/recovery_pass1">
							<Recovery1 />
						</Route>
						<Route exact path="/parmacy_consultation">
							<Medicamentos />
						</Route>
						<Route exact path="/medicine_description/:id">
							<Descripcion />
						</Route>

						<Route exact path="/medicine_consultation">
							<Consulta />
						</Route>
						<Route exact path="/password">
							<Password />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
