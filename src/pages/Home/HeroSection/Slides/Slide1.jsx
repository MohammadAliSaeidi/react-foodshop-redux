import JalapenoPizza from "../../../../assets/pizza/JalapenoPizza.png";

export default function Slide1() {
    return (
        <>
            <div className='pizza-slide pizza-slide1'>
                <div className='content'>
                    <span className='title'>QUALITY F<span style={{color: 'var(--c-primary'}}>OO</span>DS</span>
                    <span className='description'>healthy food for healthy body</span>
                </div>
                <img width={'50%'} src={JalapenoPizza} alt=""/>
            </div>
        </>
    )
}