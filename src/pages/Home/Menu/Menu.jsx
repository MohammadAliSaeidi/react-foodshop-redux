import './Menu.css'
import MenuItem from "./MenuItem";
import {useEffect, useState} from "react";
import {GetMenuData} from "../../../services/WebServices";

export default function Menu() {

	const [menuData, setMenuData] = useState([])

	useEffect(() => {
		GetMenuData().then(data => setMenuData(data))
	}, [])

	const menuItems = menuData ? menuData.map((menuItemData, index) =>
			<MenuItem key={index} data={menuItemData}/>) :
		null;


	return (
		<section className='menu'>
			<div className='content'>
				{menuItems}
			</div>
		</section>
	)
}