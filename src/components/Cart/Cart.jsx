import './Cart.css'
import {BsBag} from "react-icons/bs";
import IconButton from "../IconButton";
import {useEffect, useState} from "react";
import CartPopup from "../CartPopup";
import {useDispatch, useSelector} from "react-redux";
import {GetCartOrders, GetMenuProductById} from "../../services/WebServices";
import {addToCart} from "../../redux/Cart/cartSlice";

export default function Cart() {
	const [isOpen, setIsOpen] = useState(false)
	const [cartUpdated, setCartUpdate] = useState(false)
	const [cartData, setCartData] = useState({cartOrders: [], subtotal: 0, ordersCount: 0})
	const dispatch = useDispatch();
	const cartOrders = useSelector(state => state.cart.cartOrders)

	useEffect(() => {
		(async () => {
			if (!cartUpdated) {
				try {
					const cartOrdersInfo = await GetCartOrders();
					dispatch(addToCart(cartOrdersInfo));
					setCartUpdate(true);
				} catch (error) {
					console.error('Error fetching cart data:', error);
				}
			}
		})();
	}, []);


	useEffect(() => {
		if (cartOrders.length > 0) {
			const fetchCartData = async () => {
				let subtotal = 0;
				let ordersCount = 0;
				const cartDataPromises = cartOrders.map(async (cartOrder) => {
					const productData = await GetMenuProductById(cartOrder.id)
					subtotal += productData.price * cartOrder.quantity
					ordersCount += cartOrder.quantity
					return {
						id: productData.id,
						name: productData.name,
						price: productData.price * cartOrder.quantity,
						image: productData.image,
						availability: productData.availability,
						offPercentage: productData.offPercentage,
						quantity: cartOrder.quantity,
					}
				})

				const resolvedCartData = await Promise.all(cartDataPromises);
				setCartData({
					cartOrders: resolvedCartData,
					subtotal: subtotal.toFixed(2),
					ordersCount: ordersCount
				})
			}

			fetchCartData()
		} else {
			setCartData({cartOrders: [], subtotal: 0, ordersCount: 0})
		}
	}, [cartOrders])

	let onMouseEnterTimout;

	const handleOnMouseEnter = () => {
		onMouseEnterTimout = setTimeout(() => {
			setIsOpen(true)
		}, 200)
	};

	const handleOnMouseLeave = () => {
		clearTimeout(onMouseEnterTimout)
		setIsOpen(false)
	}

	return (
		<div className='cart' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
			<IconButton
				icon={<BsBag/>}
				content={
					<>{cartData.ordersCount} items - ${(cartData && cartData.subtotal) ? cartData.subtotal : '0.00'}</>
				}/>
			{
				isOpen && <CartPopup cartOrdersData={cartData}/>
			}
		</div>
	)
}