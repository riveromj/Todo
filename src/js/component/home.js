import React, { useState, useEffect } from "react";
import Todo from "./Todo.jsx";

function Home() {
	const [todo, setTodo] = useState("");
	const [listTodo, setListTodo] = useState([]);

	const deleteTodo = id => {
		const list = [...listTodo];
		list.splice(id, 1);
		setListTodo(list);
		console.log("borrar");
	};

	///////API FECHT
	useEffect(() => {
		const res = fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/riveromj"
		);
		res.then(response => response.json())
			.then(data => setListTodo(data))
			.catch(err => console.log(err));
	}, []);

	//////////
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/riveromj", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(listTodo)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}, []);

	useEffect(
		() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/riveromj", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(listTodo)
			})
				.then(response => response.json())
				.then(data => {
					console.log("UPDATE:", data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
		},
		[listTodo]
	);

	const handelKeyDow = e => {
		//validacion de campo vacio
		if (event.target.value.trim() != "") {
			//validacion de tecla enter
			if (e.keyCode == 13) {
				setListTodo([...listTodo, { label: todo, done: false }]);
				setTodo("");
			}
		}
	};

	return (
		<div className="card container">
			<header className="header">
				<i className="fab fa-react react" />
			</header>
			<h1>TO dO LIST</h1>
			<input
				className="todo"
				value={todo}
				type="text"
				placeholder="What needs to be done"
				onChange={e => setTodo(e.target.value)}
				onKeyDown={handelKeyDow}
				tabIndex="13"
			/>
			<ul className="list-group">
				{listTodo.map((todo, index) => {
					return (
						<Todo
							key={index}
							todo={todo.label}
							id={index}
							deleteTodo={deleteTodo}
						/>
					);
				})}
			</ul>
			<div className="card-footer">{listTodo.length} Items</div>
		</div>
	);
}

export default Home;
