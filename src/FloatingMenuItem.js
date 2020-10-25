import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingMenuItem = ({
	icon,
	text,
	toggleEditModal,
	loadEditModalWithTodo,
	todo,
	type,
	deleteTodoWithId,
}) => {
	return (
		<button
			className="floating-menu__item"
			onClick={(e) => {
				if (type === "edit") {
					loadEditModalWithTodo(todo);
					toggleEditModal();
				} else if (type === "delete") {
					deleteTodoWithId(todo.id);
				}
			}}
		>
			<span className="floating-menu__item-icon">
				<FontAwesomeIcon icon={icon} />
			</span>
			<span className="floating-menu__item-text">{text}</span>
		</button>
	);
};

export default FloatingMenuItem;
