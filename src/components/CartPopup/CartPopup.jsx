import './CartPopup.css'
import CartItem from "./CartItem";

export default function CartPopup({cartData}) {
	const cartItems = cartData.cartItems.map((cartData) => {
		return <CartItem data={cartData}/>
	})

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