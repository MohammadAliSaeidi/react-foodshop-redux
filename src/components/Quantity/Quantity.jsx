import React, {useState} from 'react';
import Loading from "../Loading";
import {useDispatch} from "react-redux";
import {DecreaseOrderQuantity, IncreaseOrderQuantity, RemoveOrderFromCart} from "../../services/WebServices";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../redux/Cart/cartSlice";
import {ReactComponent as TrashIcon} from '../../assets/icons/trash.svg'
import './Quantity.css'

function Quantity({productId, productQuantity, inputTextColor = 'black'}) {
	const dispatch = useDispatch();
	const [quantityLoading, setQuantityLoading] = useState(false)

	function handleQuantityIncrement() {
		setQuantityLoading(true)
		IncreaseOrderQuantity(productId).then(result => {
			if (result.status === 200)
				dispatch(increaseQuantity(productId))
			setQuantityLoading(false)
		}).catch(error => {
			console.log(error)
			setQuantityLoading(false)
		})
	}

	function handleQuantityDecrement() {
		setQuantityLoading(true)
		DecreaseOrderQuantity(productId).then(result => {
			if (result.status === 200)
				dispatch(decreaseQuantity(productId))
			setQuantityLoading(false)
		}).catch(error => {
			console.log(error)
			setQuantityLoading(false)
		})
	}

	function handleRemoveFromCart() {
		setQuantityLoading(true)
		RemoveOrderFromCart(productId).then(result => {
			if (result.status === 200)
				dispatch((removeFromCart(productId)))
			setQuantityLoading(false)
		}).catch(error => {
			console.log(error)
			setQuantityLoading(false)
		})
	}

	return (
		<div className='quantity-inputs'>
			{
				quantityLoading ?
					<div className='loading'>
						<Loading size={16}/>
					</div> :
					<>
						<button className='quantity-button' onClick={() => {
							if (productQuantity > 1)
								handleQuantityDecrement()
							else
								handleRemoveFromCart()
						}}>
							{
								productQuantity > 1 ?
									<span>-</span> :
									<span className='remove-icon'><TrashIcon/></span>
							}
						</button>
						<input
							style={{color: inputTextColor}}
							step={1}
							type='number'
							minLength={1}
							min={1}
							value={productQuantity}
							readOnly
						/>
						<button className='quantity-button' onClick={handleQuantityIncrement}>+
						</button>
					</>
			}
		</div>
	);
}

export default Quantity;