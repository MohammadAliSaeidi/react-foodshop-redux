import './CartItem.css';
import {useDispatch} from "react-redux";
import {decreaseQuantity, increaseQuantity} from "../../../redux/Cart/cartSlice";

function CartItem({data}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;
	const dispatch = useDispatch();

	function handleQuantityIncrement() {
		dispatch(increaseQuantity(data.id))
	}

	function handleQuantityDecrement() {
		dispatch(decreaseQuantity(data.id))
	}

	return <div key={data.id} className='cart-item'>
		<img src={imagePath} alt=''/>
		<div className='info'>
			<span className='name'>{data.name}</span>
			<span className='price'>${data.price}</span>
			<div className='quantity'>
				<p>Qty:</p>
				<div className='input'>
					<button onClick={handleQuantityDecrement}>-</button>
					<input
						step={1}
						type='number'
						minLength={1}
						min={1}
						value={data.quantity}
						readOnly
					/>
					<button onClick={handleQuantityIncrement}>+</button>
				</div>
			</div>
		</div>
	</div>
}

export default CartItem