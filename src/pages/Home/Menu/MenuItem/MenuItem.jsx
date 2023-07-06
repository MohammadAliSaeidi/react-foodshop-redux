import './MenuItem.css'

export default function MenuItem({key, data}) {
	const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;

	return (
		<div key={key} className='menu-item'>
			<div className='image'>
				<img src={imagePath} alt=""/>
			</div>
			<p className='name'>{data.name}</p>
			<p className='description'>{data.description}</p>
			<p className='price'>${data.price}</p>
		</div>
	)
}