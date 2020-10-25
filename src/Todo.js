import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import {
	faEllipsisV,
	faEdit,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import FloatingMenu from "./FloatingMenu";
import FloatingMenuItem from "./FloatingMenuItem";

const Todo = ({
	isDone,
	text,
	idValue,
	handleClick,
	toggleEditModal,
	loadEditModalWithTodo,
	deleteTodoWithId,
}) => {
	const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
	const [svgChecked, setSvgChecked] = useState(isDone);
	return (
		<div id={idValue} className="todo-card">
			<input type="checkbox" defaultChecked={isDone} id="venilla-checkbox" />
			<label
				htmlFor="venilla-checkbox"
				className="todo-card__checkbox-container"
				onClick={(e) => {
					setSvgChecked(!isDone);
					handleClick(e);
				}}
			>
				<svg viewBox="0 0 100 100">
					<path
						className="svg-checkbox-outline"
						d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
					/>
					<polyline
						className={`svg-checkbox-tick${svgChecked ? " checked" : ""}`}
						points="25.5,53.5 39.5,67.5 72.5,34.5 "
					/>
				</svg>
			</label>
			<div className="todo-card__text">{text}</div>
			<div
				tabIndex="-1"
				className={
					isFloatingMenuOpen
						? "todo-card__floating-menu-btn active"
						: "todo-card__floating-menu-btn"
				}
				onClick={(e) => {
					setIsFloatingMenuOpen(!isFloatingMenuOpen);
					e.currentTarget.focus();
				}}
				onBlur={() => {
					if (isFloatingMenuOpen) {
						setIsFloatingMenuOpen(false);
					}
				}}
			>
				<FontAwesomeIcon icon={faEllipsisV} />
				<CSSTransition
					in={isFloatingMenuOpen}
					timeout={100}
					unmountOnExit
					classNames="floating-menu"
				>
					<FloatingMenu dataTodoId={idValue}>
						<FloatingMenuItem
							type={"edit"}
							icon={faEdit}
							text={"edit"}
							todo={{
								id: idValue,
								text: text,
							}}
							toggleEditModal={toggleEditModal}
							loadEditModalWithTodo={loadEditModalWithTodo}
						/>
						<FloatingMenuItem
							icon={faTrash}
							text={"delete"}
							type={"delete"}
							todo={{
								id: idValue,
								text: text,
							}}
							deleteTodoWithId={deleteTodoWithId}
						/>
					</FloatingMenu>
				</CSSTransition>
			</div>
		</div>
	);
};
export default Todo;
