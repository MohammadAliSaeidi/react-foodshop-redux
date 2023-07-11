import './App.css';
import HomePage from "./pages/Home";
import {useDispatch} from 'react-redux';
import './styles'
import MenuContext from "./Context/MenuContext";
import {useEffect, useState} from "react";
import {GetCartItemIds, GetMenuData} from "./services/WebServices";
import {addToCart} from "./redux/Cart/cartActions";

function App() {
    const [menuData, setMenuData] = useState([])
    const [cartUpdated, setCartUpdate] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const menuData = await GetMenuData()
                setMenuData(menuData)

                if (!cartUpdated) {
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

                    dispatch(addToCart(cartItems))

                    setCartUpdate(true)
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        }

        fetchData();
    }, [])

    return (
        <MenuContext.Provider value={menuData}>
            <div className="App">
                <HomePage/>
            </div>
        </MenuContext.Provider>
    );
}

export default App;
