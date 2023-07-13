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
				const cartDataPromises = cartItems.map(async (item) => {
					const menuItemData = await GetMenuItemById(item.id);
					return {
						id: menuItemData.id,
						name: menuItemData.name,
						price: menuItemData.price,
						image: menuItemData.image,
						availability: menuItemData.availability,
						offPercentage: menuItemData.offPercentage,
						quantity: menuItemData.quantity,
					};
				});

				const resolvedCartData = await Promise.all(cartDataPromises);
				setCartData(resolvedCartData);
			};

			fetchCartData();
		}
	}, [cartItems]);

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
				isOpen && <CartPopup cartItemsData={cartData}/>
			}
		</div>
	)
}