import './Menu.css'
import MenuProduct from "./MenuProduct";
import {useEffect, useState} from "react";
import {GetMenuData} from "../../../services/WebServices";

export default function Menu() {

	const [menuData, setMenuData] = useState([])

	useEffect(() => {
		GetMenuData().then(data => setMenuData(data))
	}, [])

	const menuItems = menuData ? menuData.map((menuItemData, index) =>
			<MenuProduct key={index} data={menuItemData}/>) :
		null;


	return (
		<section className='menu'>
			<div className='content'>
				{menuItems}
			</div>
		</section>
	)
}