import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";


//create your first component

const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

//Creo user

	useEffect(() => {




		/*fetch('https://playground.4geeks.com/todo/users/bastidasEmily', {
			method: 'POST',
			mode: 'cors',
			redirect: 'follow',
			headers: new Headers({
				'Content-Type': 'text/plain'
			})
		})
			.then(res => res.json())
			.then(response => { /* manejar la respuesta })
			.catch(error => console.error(error)); */

	}, [])

// 
	let mensaje = null;

	if (todos.length === 0) {
		mensaje = "No hay tareas, añadir tareas";
	}

	return (

		<div className="container">

			<h1 className="mt-5 mb-5">todos</h1>

			<ul className="mx-auto">
				<li><input className="w-100" type="text" placeholder="What do you need?" onChange={(e) => setInputValue(e.target.value)} // capturo la info del input con onChange
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") { //si el usuario presiona enter, hice una condicional que detecta por medio de trim si el campo está vacío y que no guarde la tarea vacia

							if (inputValue.trim().length === 0) {
								console.log("el usuario no ha ingresado datos");
								return;
							}

							setTodos(todos.concat(inputValue));
							setInputValue("")
						}
					}}
				></input>

				</li>

				{todos.map((items, index) => (
					<li key={index} className="d-flex justify-content-between">
						{items} <IoCloseOutline className="delete-icon" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex))} />
					</li>
				))}

				<li className="contador"> {todos.length} item left</li>

			</ul>

			{mensaje && <p>{mensaje}</p>}
		</div>
	);
};

export default Home;