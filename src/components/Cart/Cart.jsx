import './Cart.css'
import {BsBag} from "react-icons/bs";
import IconButton from "../IconButton";
import {useEffect, useState} from "react";
import CartPopup from "../CartPopup";
import {useDispatch, useSelector} from "react-redux";
import {GetCartItems, GetMenuItemById} from "../../services/WebServices";
import {addToCart} from "../../redux/Cart/cartSlice";

export default function Cart({itemsCount, price}) {
	const [isOpen, setIsOpen] = useState(false)
	const [cartUpdated, setCartUpdate] = useState(false)
	const [cartData, setCartData] = useState()
	const dispatch = useDispatch();
	const cartItems = useSelector(state => state.cart.cartItems)


	useEffect(() => {
		(async () => {
			if (!cartUpdated) {
				try {
					const cartItemsInfo = await GetCartItems();
					dispatch(addToCart(cartItemsInfo));
					setCartUpdate(true);
				} catch (error) {
					console.error('Error fetching cart items:', error);
				}
			}
		})();
	}, []);


	useEffect(() => {
		if (cartItems.length > 0) {
			const fetchCartData = async () => {
				let subtotal = 0;
				const cartDataPromises = cartItems.map(async (cartItem) => {
					const menuItemData = await GetMenuItemById(cartItem.id)
					subtotal += menuItemData.price * cartItem.quantity
					return {
						id: menuItemData.id,
						name: menuItemData.name,
						price: menuItemData.price * cartItem.quantity,
						image: menuItemData.image,
						availability: menuItemData.availability,
						offPercentage: menuItemData.offPercentage,
						quantity: cartItem.quantity,
					}
				})

				const resolvedCartData = await Promise.all(cartDataPromises);
				setCartData({
					cartItems: resolvedCartData,
					subtotal: subtotal.toFixed(2)})
			}

			fetchCartData()
		}
	}, [cartItems])

	const handleOnMouseEnter = () => {
		setTimeout(() => {
			setIsOpen(true);
		}, 200);
	};

	const handleOnMouseLeave = () => {
		setIsOpen(false);
	};

	return (
		<div className='cart' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
			<IconButton
				icon={<BsBag/>}
				content={
					<>{itemsCount} items - ${price ? price : '0.00'}</>
				}/>
			{
				isOpen && <CartPopup cartData={cartData}/>
			}
		</div>
	)
}