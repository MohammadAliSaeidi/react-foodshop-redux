import './App.css';
import HomePage from "./pages/Home";
import {connect, Provider} from 'react-redux'
import store from "./redux/store";
import './styles'
import MenuContext from "./Context/MenuContext";
import {useEffect, useState} from "react";
import {GetCartItemIds, GetMenuData} from "./services/WebServices";
import {addToCart} from "./redux/Cart/cartActions";

export default function App() {
	const [menuData, setMenuData] = useState([])
	// const [cartData, setCartData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const menuData = await GetMenuData()
				setMenuData(menuData)

				const cartItemsInfo = await GetCartItemIds()

				const cartItems = cartItemsInfo.map(cartItemInfo => {
					const cartMenuData = menuData.find(menuItem =>
						menuItem.id === cartItemInfo.id
					)

					return {
						id: cartMenuData.id,
						name: cartMenuData.name,
						price: cartMenuData.price,
						image: cartMenuData.image,
						availability: cartMenuData.availability,
						offPercentage: cartMenuData.offPercentage,
						quantity: cartItemInfo.quantity
					}
				})

				console.log('cart items: ')
				console.log(cartItems)
				// setCartData(cartItems)
				addToCart(cartItems)

			} catch (error) {
				console.error('Error fetching cart items:', error);
			}
		}

		fetchData();

	}, [])

	return (
		<Provider store={store}>
			<MenuContext.Provider value={menuData}>
				{/*<CartContext.Provider value={cartData}>*/}
				<div className="App">
					<HomePage/>
				</div>
				{/*</CartContext.Provider>*/}
			</MenuContext.Provider>
		</Provider>
	);
}

const mapDispatchToProps = {
	addToCart
};

// export default connect(null, mapDispatchToProps)(App);