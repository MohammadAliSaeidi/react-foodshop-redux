import './MenuItem.css'
import {useState} from "react";

export default function MenuItem({data}) {
	const [hovered, setHovered] = useState(false)

	const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className='menu-item'>
			<div className='image'>
				<img src={imagePath} alt=""/>
			</div>
			<p className='name'>{data.name}</p>
			<p className='description'>{data.description}</p>
			<div className='add-to-cart-and-price'>
				<div className={'add-to-cart ' + (hovered ? 'show-add-button' : '')}>
					<button>Add to cart</button>
				</div>
				<p className='price'>${data.price}</p>
			</div>
		</div>
	)
}