import React from "react";
import PropTypes from "prop-types";
import "../../styles/todo.css";

function Todo(props) {
	return (
		<li className="list-group-item">
			{props.id + 1}. {props.todo}{" "}
			<span
				className="delete pointer"
				onClick={() => props.deleteTodo(props.id)}>
				{" "}
				X{" "}
			</span>
		</li>
	);
}

Todo.propTypes = {
	todo: PropTypes.string,
	id: PropTypes.number,
	deleteTodo: PropTypes.func
};

export default Todo;
