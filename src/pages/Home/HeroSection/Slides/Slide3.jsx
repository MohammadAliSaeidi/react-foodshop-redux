import JalapenoPizza from "../../../../assets/pizza/pizza-04.png";
import './Slides.css'

export default function Slide3() {
    return (
        <>
            <div className='pizza-slide pizza-slide2 pizza-slide3'>
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