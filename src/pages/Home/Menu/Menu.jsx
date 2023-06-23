import './Menu.css'
import {useEffect, useState} from "react";
import {GetMenuData} from "../../../services/WebServices";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        GetMenuData().then(menuData => {
            setMenuData(() => menuData)
        })
    }, [])

    const menuItems = menuData ? menuData.map(menuItemData =>
            <MenuItem data={menuItemData}/>) :
        null;

    return (
        <section className='menu'>
            <div className='content'>
                {menuItems}
            </div>
        </section>
    )
}