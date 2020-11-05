import React from "react";
import Appbar from "./Appbar";
import PreloadScreen from "./PreloadScreen";
import TodoList from "./TodoList";

const App = () => {
	return (
			<>
				<PreloadScreen />
				<Appbar />
				<TodoList />
				<img id='create_todo_svg' src={require('./images/createTodo.svg')} alt='' />
			</>
		);
};

export default App;
