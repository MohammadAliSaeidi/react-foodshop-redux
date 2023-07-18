import './Logo.css'
// import {ReactComponent as LogoIcon} from "../../assets/icons/logo.svg";
import logo from '../../assets/logo.png'

export default function Logo() {
    return (
        <div className={'logo'}>
            <img src={logo} alt="" />
        </div>
    )
}