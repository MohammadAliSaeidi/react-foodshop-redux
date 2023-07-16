import {ReactComponent as RemoveIcon} from "../../../assets/icons/xmark-solid.svg";
import './CartOrder.css';
import Quantity from "../../Quantity";
import {RemoveOrderFromCart} from "../../../services/WebServices";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../../redux/Cart/cartSlice";
import Loading from "../../Loading";

function CartOrder({productData}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${productData.image}`;
	const [removeLoading, setRemoveLoading] = useState(false)
	const dispatch = useDispatch();

	function handleRemove() {
		setRemoveLoading(true)
		RemoveOrderFromCart(productData.id)
			.then(result => {
				if (result.status === 200)
					dispatch(removeFromCart(productData.id))
				setRemoveLoading(false)
			})
			.catch(error => {
				console.log(error)
				setRemoveLoading(false)
			})
	}

	return <div key={productData.id} className='cart-item'>
		<div className='content'>
			<img src={imagePath} alt=''/>
			<div className='info'>
				<span className='name'>{productData.name}</span>
				<span className='price'>${productData.price.toFixed(2)}</span>
				<div className='quantity'>
					<p>Qty:</p>
					<Quantity productQuantity={productData.quantity} productId={productData.id}/>
				</div>
			</div>
		</div>
		<button onClick={handleRemove} className='remove-order'>
			<span>
				{removeLoading ? <Loading size={16}/> : <RemoveIcon/>}
			</span>
		</button>
	</div>
}

export default CartOrder