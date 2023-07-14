import './CartPopup.css'
import CartItem from "./CartItem";
import {useEffect, useState} from "react";

export default function CartPopup({cartData}) {

	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		if (cartData) {
			const items = cartData.cartItems.map((cartData) => {
				return <CartItem key={cartData.id} data={cartData}/>
			})
			setCartItems(items)
		}
	}, [cartData])


	return (
		<div className='cart-popup'>
			{
				cartItems.length > 0 ?
					<div className='cart-content'>
						{cartItems}
						<div className='subtotal-container'>
							<span>Cart Subtotal: </span>
							<span className='subtotal'>${cartData.subtotal}</span>
						</div>
					</div> :
					<div className='empty-cart'>Your cart is empty</div>
			}
		</div>
	)
}