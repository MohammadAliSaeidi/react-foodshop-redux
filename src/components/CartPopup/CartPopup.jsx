import './CartPopup.css'
import CartItem from "./CartItem";

export default function CartPopup({cartItems}) {
	const cartItemComponent = cartItems.map((cartItem) => {
		return <CartItem data={cartItem}/>
	})

	return (
		<div className='cart-popup'>
			{
				cartItemComponent ?
					cartItemComponent :
					<div>No items here</div>
			}
		</div>
	)
}