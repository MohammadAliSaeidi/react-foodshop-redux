import './Cart.css'
import {BsBag} from "react-icons/bs";
import IconButton from "../IconButton";
import {useContext, useState} from "react";
import CartPopup from "../CartPopup";
import CartContext from "../../Context/CartContext";
import {useSelector} from "react-redux";

export default function Cart({itemsCount, price}) {
	const [isOpen, setIsOpen] = useState(false)
	const cartItems = useSelector(state => state.cartItems)

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
				isOpen && <CartPopup cartItems={cartItems}/>
			}
		</div>
	)
}