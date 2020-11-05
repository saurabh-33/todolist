import React, { useState } from "react";
import Todo from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { createTodo as CreateTodoSVG } from "./images/createTodo.svg";

const TodoList = () => {
	//make sure these values match respective scss values
	const modalTransitionDuration = 100;
	const modalContainerTransitionDuration = modalTransitionDuration;
	const todoTransitionDuration = 250;

	const [doneTodos, setDoneTodos] = useState([]);
	const [remainingTodos, setRemainingTodos] = useState([]);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [initEditModalWithTodo, setInitEditModalWithTodo] = useState({});

	const handleDoneTodoClick = (e) => {
		let tempTodo;
		let todos = doneTodos.filter((todo) => {
			if (todo.id === e.currentTarget.parentNode.id) {
				tempTodo = todo;
				return false;
			}
			return true;
		});
		setDoneTodos(todos);
		setRemainingTodos([...remainingTodos, tempTodo]);
	};
	const handleRemainingTodoClick = (e) => {
		let tempTodo;
		let todos = remainingTodos.filter((todo) => {
			if (todo.id === e.currentTarget.parentNode.id) {
				tempTodo = todo;
				return false;
			}
			return true;
		});
		setRemainingTodos(todos);
		setDoneTodos([...doneTodos, tempTodo]);
	};

	const toggleCreateModal = (e) => {
		setIsCreateModalOpen(!isCreateModalOpen);
	};
	const toggleEditModal = (e) => {
		setIsEditModalOpen(!isEditModalOpen);
	};

	const createNewRemainingTodoId = () => {
		if (remainingTodos.length + doneTodos.length === 0) {
			return "todo-1";
		}
		return `todo-${remainingTodos.length + doneTodos.length + 1}`;
	};

	const isTextOnlyWhitespace = (text) => {
		return text.replace(/\s/g, '').length === 0 
	}

	const createTodoWithId = (newTodoId, newTodoText) => {
		if (!isTextOnlyWhitespace(newTodoText) || newTodoText.length !== 0) {
			setRemainingTodos([
				...remainingTodos,
				{
					id: newTodoId,
					text: newTodoText,
				},
			]);
		}
	};
	const editTodoWithId = (todoId, newText) => {
		if (!isTextOnlyWhitespace(newText) || newText.length !== 0) {
			let isTodoFound = false;
			let AlteredTodos = remainingTodos.map(todo => {
				if (todo.id === todoId) {
					isTodoFound = true;
					return { id: todoId, text: newText };
				}
				return todo;
			});
			if (isTodoFound) {
				setRemainingTodos(AlteredTodos);
			} else {
				AlteredTodos = doneTodos.map(todo => {
					if (todo.id === todoId) {
						return { id: todoId, text: newText };
					}
					return todo;
				});
				setDoneTodos(AlteredTodos);
			}
		} else {
			deleteTodoWithId(todoId);
		}
	};

	const loadEditModalWithTodo = (todo) => {
		setInitEditModalWithTodo(todo);
	};

	const deleteTodoWithId = (todoId) => {
		let isTodoFound = false;
		let AlteredTodos = remainingTodos.filter((todo) => {
			if (todo.id === todoId) {
				isTodoFound = true;
				return false;
			}
			return true;
		});
		if (isTodoFound) {
			setRemainingTodos(AlteredTodos);
		} else {
			AlteredTodos = doneTodos.filter((todo) => {
				if (todo.id === todoId) {
					return false;
				}
				return true;
			});
			setDoneTodos(AlteredTodos);
		}
	};

	return (
		<>
			<TransitionGroup className="unchecked-todolist">
				{remainingTodos.map((todo) => (
					<CSSTransition
						classNames="todo-card"
						key={`transition-${todo.id}`}
						timeout={todoTransitionDuration}
						unmountOnExit
					>
						<Todo
							isDone={false}
							key={todo.id}
							idValue={todo.id}
							text={todo.text}
							handleClick={handleRemainingTodoClick}
							toggleEditModal={toggleEditModal}
							loadEditModalWithTodo={loadEditModalWithTodo}
							deleteTodoWithId={deleteTodoWithId}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
			<div className="create-todo-btn-container">
				<button className="create-todo-btn" onClick={toggleCreateModal}>
					<FontAwesomeIcon icon={faPlus} /> Create Todo
				</button>
			</div>
			<TransitionGroup className="checked-todolist">
				{doneTodos.map((todo) => (
					<CSSTransition
						classNames="todo-card"
						className="todo-card"
						key={`transition-${todo.id}`}
						timeout={todoTransitionDuration}
						unmountOnExit
					>
						<Todo
							isDone={true}
							key={todo.id}
							idValue={todo.id}
							text={todo.text}
							handleClick={handleDoneTodoClick}
							toggleEditModal={toggleEditModal}
							loadEditModalWithTodo={loadEditModalWithTodo}
							deleteTodoWithId={deleteTodoWithId}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
			<CSSTransition
				classNames="modal-container"
				in={isEditModalOpen || isCreateModalOpen}
				timeout={modalContainerTransitionDuration}
				unmountOnExit
			>
				<div className={`modal-container`}></div>
			</CSSTransition>
			<CSSTransition
				in={isCreateModalOpen}
				timeout={modalTransitionDuration}
				classNames={"modal"}
				unmountOnExit
			>
				<Modal
					type="create"
					toggleCreateModal={toggleCreateModal}
					initWithTodo={{
						id: createNewRemainingTodoId(),
						text: "",
					}}
					createTodoWithId={createTodoWithId}
				/>
			</CSSTransition>
			<CSSTransition
				in={isEditModalOpen}
				timeout={modalTransitionDuration}
				classNames={"modal"}
				unmountOnExit
			>
				<Modal
					type="edit"
					toggleEditModal={toggleEditModal}
					initWithTodo={initEditModalWithTodo}
					editTodoWithId={editTodoWithId}
				/>
			</CSSTransition>
		</>
	);
};

export default TodoList;
