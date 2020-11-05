import React,{useState} from 'react'

const TodoCheckbox = ({isDone, handleClick}) => {
	const [isSVGChecked, setIsSVGChecked] = useState(isDone);

    return (
        <>
            <input type="checkbox" defaultChecked={isDone} id="venilla-checkbox" />
			<label
				htmlFor="venilla-checkbox"
				className="todo-card__checkbox-container"
				onClick={(e) => {
					setIsSVGChecked(!isDone);
					handleClick(e);
				}}
			>
				<svg viewBox="0 0 100 100">
					<path
						className="svg-checkbox-outline"
						d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
					/>
					<polyline
						className={`svg-checkbox-tick${isSVGChecked ? " checked" : ""}`}
						points="25.5,53.5 39.5,67.5 72.5,34.5 "
					/>
				</svg>
			</label>
        </>
    )
}

export default TodoCheckbox
