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
			</>
		);
};

export default App;
