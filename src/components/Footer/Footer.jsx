import './Footer.css'
import Logo from "../Logo";
import {ReactComponent as PhoneIcon} from "../../assets/icons/phone-solid.svg";
import {ReactComponent as EmailIcon} from "../../assets/icons/envelope-solid.svg";
import React from "react";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='top-sec'>
				<div className='col-1'>

					<Logo/>

					<p className='address' onClick={() => {
						window.open("https://maps.google.com?q=43.830618,-79.53272");
					}}>
						9100 Jane, Thornhill, Ontario, Canada
					</p>

					<p className='phones'>
						<PhoneIcon/>
						<a className='link' href='tel:+19057607767'>(905) 760-7767,</a>
						<a className='link' href='tel:+19058392506'>(905) 839-2506</a>
					</p>

					<p className='email'>
						<EmailIcon/>
						<a className='link' href='mailto:'>info.pizza@gmail.com</a>
					</p>

				</div>
				<div className={'col-2'}>
					
				</div>
				<div></div>
			</div>
			<div className='bottom-sec'></div>
		</footer>
	)
}