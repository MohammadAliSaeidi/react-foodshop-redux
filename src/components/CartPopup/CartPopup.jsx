import './CartPopup.css'
import CartOrder from "./CartOrder";
import {useEffect, useState} from "react";

export default function CartPopup({cartOrdersData}) {

	const [cartOrders, setCartOrders] = useState([])

	useEffect(() => {
		if (cartOrdersData) {
			const orders = cartOrdersData.cartOrders.map((orderData) => {
				return <CartOrder key={orderData.id} productData={orderData}/>
			})
			setCartOrders(orders)
		}
	}, [cartOrdersData])


	return (
		<div className='cart-popup'>
			{
				cartOrders.length > 0 ?
					<div className='cart-content'>
						{cartOrders}
						<div className='subtotal-container'>
							<span>Cart Subtotal: </span>
							<span className='subtotal'>${cartOrdersData.subtotal}</span>
						</div>
					</div> :
					<div className='empty-cart'>Your cart is empty</div>
			}
		</div>
	)
}