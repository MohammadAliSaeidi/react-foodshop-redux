import './CartPopup.css'
import CartItem from "./CartItem";

export default function CartPopup({cartItemsData}) {
	const cartItems = cartItemsData.map((cartItem) => {
		return <CartItem data={cartItem}/>
	})

	return (
		<div className='cart-popup'>
			{
				cartItems ?
					cartItems :
					<div>No items here</div>
			}
		</div>
	)
}