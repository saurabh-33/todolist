import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import {
	faEllipsisV,
	faEdit,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import FloatingMenu from "./FloatingMenu";
import FloatingMenuItem from "./FloatingMenuItem";

const TodoMenu = ({loadEditModalWithTodo, deleteTodoWithId, text, idValue, toggleEditModal}) => {
	const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);

    return (
        <div
				tabIndex="-1"
				className={`todo-card__floating-menu-btn${isFloatingMenuOpen ? ` active`:``}`}
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
    )
}

export default TodoMenu
