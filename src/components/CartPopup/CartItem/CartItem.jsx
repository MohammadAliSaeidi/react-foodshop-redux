import './CartItem.css';
import {connect} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../../../redux/Cart/cartActions';

function CartItem({data, increaseQuantity, decreaseQuantity}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;

	function handleQuantityIncrement() {
		increaseQuantity(data.id);
	}

	function handleQuantityDecrement() {
		decreaseQuantity(data.id);
	}

	return (
		<div className='cart-item' key={data.id}>
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
	);
}

const mapDispatchToProps = {
	increaseQuantity,
	decreaseQuantity,
};

export default connect(null, mapDispatchToProps)(CartItem);
