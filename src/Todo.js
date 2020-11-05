import React, { useState } from "react";
import TodoCheckbox from "./TodoCheckbox";
import TodoMenu from "./TodoMenu";

const Todo = ({
	isDone,
	text,
	idValue,
	handleClick,
	toggleEditModal,
	loadEditModalWithTodo,
	deleteTodoWithId,
}) => {
	return (
		<div id={idValue} className="todo-card">
			<TodoCheckbox isDone={isDone} handleClick={handleClick} />
			<div className="todo-card__text">{text}</div>
			<TodoMenu 
				toggleEditModal={toggleEditModal}
				loadEditModalWithTodo={loadEditModalWithTodo}
				deleteTodoWithId={deleteTodoWithId} 
				text={text}
				idValue={idValue}
			/>
		</div>
	);
};
export default Todo;
