import JalapenoPizza from "../../../../assets/pizza/pizza-01.png";
import './Slides.css'

export default function Slide2() {
    return (
        <>
            <div className='pizza-slide pizza-slide2'>
                <div className='content'>
                    <span className='title'>QUALITY <br/>F<span style={{color: 'var(--c-primary'}}>OO</span>DS</span>
                    <span className='description'>healthy food for healthy body</span>
                </div>
                <div className='pictures'>
                    <img src={JalapenoPizza} alt=""/>
                </div>
            </div>
        </>
    )
}