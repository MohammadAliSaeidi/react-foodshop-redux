import './CartItem.css';
import {useDispatch} from "react-redux";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../../redux/Cart/cartSlice";
import {ReactComponent as TrashIcon} from '../../../assets/icons/trash.svg'

function CartItem({data}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;
	const dispatch = useDispatch();

	function handleQuantityIncrement() {

		dispatch(increaseQuantity(data.id))
	}

	function handleQuantityDecrement() {
		dispatch(decreaseQuantity(data.id))
	}

	function handleRemoveFromCart(){
		dispatch(removeFromCart(data.id))
	}

	return <div key={data.id} className='cart-item'>
		<img src={imagePath} alt=''/>
		<div className='info'>
			<span className='name'>{data.name}</span>
			<span className='price'>${data.price}</span>
			<div className='quantity-container'>
				<p>Qty:</p>
				<div className='quantity-inputs'>
					<button className='quantity-button' onClick={() => {
						if(data.quantity > 1)
							handleQuantityDecrement()
						else
							handleRemoveFromCart()
					}}>
						{
							data.quantity > 1 ?
								<span>-</span> :
								<span className='remove-icon'><TrashIcon/></span>
						}
					</button>
					<input
						step={1}
						type='number'
						minLength={1}
						min={1}
						value={data.quantity}
						readOnly
					/>
					<button className='quantity-button' onClick={handleQuantityIncrement}>+</button>
				</div>
			</div>
		</div>
	</div>
}

export default CartItem