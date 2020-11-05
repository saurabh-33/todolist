import React, { useState } from "react";
import {escape} from 'html-escaper'

const Modal = (props) => {
	const [inputText, setInputText] = useState(props.initWithTodo.text);

	const moveCursorToEnd = (el) => {
		if (typeof el.selectionStart === "number") {
			el.selectionStart = el.selectionEnd = el.value.length;
		} else if (typeof el.createTextRange !== "undefined") {
			el.focus();
			const range = el.createTextRange();
			range.collapse(false);
			range.select();
		}
	};

	return (
		<div className="modal">
			<textarea
				maxLength={100}
				autoFocus
				value={inputText}
				onFocus={(e) => {
					moveCursorToEnd(e.currentTarget);
				}}
				onChange={(e) => {
					setInputText(e.target.value);
				}}
			></textarea>
			{props.type === "create" && (
				<button
					className="modal__action-btn modal__action-btn--raised"
					onClick={(e) => {
						props.createTodoWithId(props.initWithTodo.id, escape(inputText));
						props.toggleCreateModal();
					}}
				>
					create
				</button>
			)}
			{props.type === "edit" && (
				<button
					className="modal__action-btn modal__action-btn--raised"
					onClick={(e) => {
						props.editTodoWithId(props.initWithTodo.id, escape(inputText));
						props.toggleEditModal();
					}}
				>
					save
				</button>
			)}
			<button
				className="modal__action-btn modal__action-btn--outlined"
				onClick={
					props.type === "create"
						? props.toggleCreateModal
						: props.toggleEditModal
				}
			>
				cancel
			</button>
		</div>
	);
};

export default Modal;
