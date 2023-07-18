import JalapenoPizza from "../../../../assets/pizza/pizza-04.png";
import './Slides.css'

export default function Slide3() {
    return (
        <>
            <div className='pizza-slide pizza-slide2 pizza-slide3'>
                <div className='content'>
                    <span className='subheading'>Welcome</span>
                    <span className='title'>Crafting Pizzas to Delight Your Palate</span>
                    <span className='description'>Experience the art of pizza making, where every slice is meticulously crafted to satisfy your taste buds.</span>
                </div>
                <div className='pictures'>
                    <img src={JalapenoPizza} alt=""/>
                </div>
            </div>
        </>
    )
}