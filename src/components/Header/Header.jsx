import './Header.css'
import Logo from "../Logo";
import Cart from "../Cart";
import PhoneNumber from "../PhoneNumber";

export default function Header() {
    return (
        <div className={'header'}>
            <div className='header-content'>
                <Logo/>
                <nav>
                    <button className='nav-button'>HOME</button>
                    <button className='nav-button'>MENU</button>
                    <button className='nav-button'>BLOG</button>
                </nav>
                <div className='right-links'>
                    <PhoneNumber />
                    <Cart />
                </div>
            </div>
        </div>
    )
}