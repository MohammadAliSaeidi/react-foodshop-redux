import './App.css';
import HomePage from "./pages/Home";
import {useDispatch} from 'react-redux';
import './styles'
import {useEffect, useState} from "react";
import {GetCartItems, GetMenuData, GetMenuItemById} from "./services/WebServices";
import {addToCart} from "./redux/Cart/cartSlice";

function App() {
	const [cartUpdated, setCartUpdate] = useState(false)
	const dispatch = useDispatch();

	return (
		// <MenuContext.Provider value={useSelector(state => state.menuItems)}>
		<div className="App">
			<HomePage/>
		</div>
		// </MenuContext.Provider>
	);
}

export default App;
