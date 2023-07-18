import JalapenoPizza from "../../../../assets/pizza/pizza-01.png";
import './Slides.css'

export default function Slide1() {
    return (
        <>
            <div className='pizza-slide pizza-slide1'>
                <div className='content'>
                    <span className='subheading'>Welcome</span>
                    <span className='title'>Delivering Happiness</span>
                    <span className='description'>Experience the joy of delicious pizza delivered right to your doorstep, bringing happiness with every bite.</span>
                </div>
                <img width={'50%'} src={JalapenoPizza} alt=""/>
            </div>
        </>
    )
}