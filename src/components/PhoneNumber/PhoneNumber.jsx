import './PhoneNumber.css'
import {BsTelephone} from 'react-icons/bs';
import IconButton from "../IconButton";

export default function PhoneNumber({icon}) {
    return (
        <IconButton icon={<BsTelephone/>} content={'+98 123 456 78 90'}/>
    )
}