import './App.css';
import HomePage from "./pages/Home";
import {useDispatch} from 'react-redux';
import './styles'
import {useEffect, useState} from "react";

function App() {
	const [cartUpdated, setCartUpdate] = useState(false)
	const dispatch = useDispatch();

	return (
		<div className="App">
			<HomePage/>
		</div>
	);
}

export default App;
