import JalapenoPizza from "../../../../assets/pizza/pizza-01.png";
import './Slides.css'

export default function Slide2() {
    return (
        <>
            <div className='pizza-slide pizza-slide2'>
                <div className='content'>
                    <span className='subheading'>Welcome</span>
                    <span className='title'>Fresh Ingredients</span>
                    <span className='description'>Our pizzas are made with the finest and freshest ingredients, ensuring a burst of flavor in every bite.</span>
                </div>
                <div className='pictures'>
                    <img src={JalapenoPizza} alt=""/>
                </div>
            </div>
        </>
    )
}