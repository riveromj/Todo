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

	const handelKeyDow = e => {
		if (e.keyCode == 13 && event.target.value != "") {
			setListTodo([...listTodo, todo]);
			setTodo("");
		}
	};

	/*useEffect(
		() => {
			console.log("CICLO DE VIDA");
		},
		[listTodo]
	);*/

	return (
		<div className="card container">
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
							todo={todo}
							id={index}
							deleteTodo={deleteTodo}
						/>
					);
				})}
			</ul>
			<div className="card-footer">{listTodo.length} Item</div>
		</div>
	);
}

export default Home;
