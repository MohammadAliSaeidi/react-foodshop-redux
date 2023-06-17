import './Cart.css'
import {BsBag} from "react-icons/bs";
import IconButton from "../IconButton";

export default function Cart({itemsCount, price}) {
    return (
        <IconButton
            icon={<BsBag/>}
            content={
                <>{itemsCount} items - ${price ? price : '0.00'}</>
            }/>
    )
}