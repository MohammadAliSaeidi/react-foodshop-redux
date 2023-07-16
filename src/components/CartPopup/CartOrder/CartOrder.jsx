import './CartOrder.css';
import Quantity from "../../Quantity";

function CartOrder({productData}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${productData.image}`;

	return <div key={productData.id} className='cart-item'>
		<img src={imagePath} alt=''/>
		<div className='info'>
			<span className='name'>{productData.name}</span>
			<span className='price'>${productData.price}</span>
			<div className='quantity'>
				<p>Qty:</p>
				<Quantity productQuantity={productData.quantity} productId={productData.id}/>
			</div>
		</div>
	</div>
}

export default CartOrder