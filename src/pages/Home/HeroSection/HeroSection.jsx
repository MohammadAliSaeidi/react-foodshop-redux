import bg from '../../../assets/bg.jpg'
import './HeroSection.css'
import brushImg from '../../../assets/brush.png'

export default function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='bg' style={{backgroundImage: `url(${bg})`}}>
                Test
            </div>
            <section className='slogans-section'>
                <div className='brush brush1' style={{backgroundImage: `url(${brushImg})`}}/>
                <div className='content'>
                    <div className='slogan'>

                    </div>
                </div>
                <div className='brush brush2' style={{backgroundImage: `url(${brushImg})`}}/>
            </section>
        </div>
    )
}