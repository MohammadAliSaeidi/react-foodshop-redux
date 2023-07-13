import './CartPopup.css'
import CartItem from "./CartItem";
import {useEffect, useState} from "react";

export default function CartPopup({cartData}) {

	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		const items = cartData.cartItems.map((cartData) => {
			return <CartItem data={cartData}/>
		})

		setCartItems(items)
	}, cartData)



	return (
		<div className='cart-popup'>
			{
				cartItems ?
					<div className='cart-content'>
						{cartItems}
						<div className='subtotal'><span>Cart Subtotal: </span><span>${cartData.subtotal}</span></div>
					</div> :
					<div>No items here</div>
			}
		</div>
	)
}