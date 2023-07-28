import './Header.css'
import Logo from "../Logo";
import Cart from "../Cart";
import PhoneNumber from "../PhoneNumber";
import {useEffect, useState} from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'header scrolled' : 'header'}>
            <div className='header-content'>
                <Logo/>
                <nav>
                    <button className='nav-button'>HOME</button>
                    <button className='nav-button'>MENU</button>
                </nav>
                <div className='right-links'>
                    {/*<PhoneNumber/>*/}
                    <Cart/>
                </div>
            </div>
        </header>
    )
}