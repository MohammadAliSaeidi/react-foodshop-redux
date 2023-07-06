import './Menu.css'
import MenuItem from "./MenuItem";
import MenuContext from "../../../Context/MenuContext";
import {useContext} from "react";

export default function Menu() {
    const menuData = useContext(MenuContext);

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