const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userlogueado: false,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			get_all_medicines: () => {
				fetch("https://3001-olive-eel-xv09wr6f.ws-us03.gitpod.io" + "/api/medicamentos")
					.then(resp => resp.json())
					.then(data => {
						setStore({ medicines: data });
						console.log(data, "linea");
					})
					.catch(error => {
						console.log("Error loading message from backend XXXX", error);
					});
			},

			agregarEmailrecuperacion: email => {
				setStore({ email: email });
				console.log(getStore());
			},
			usuariologin: () => {
				setStore({ userlogueado: true });
				console.log("estoy cambiando a true");
			},
			usuariologout: () => {
				setStore({ userlogueado: false });
				console.log("estoy cambiando a false");
			}
		}
	};
};

export default getState;
