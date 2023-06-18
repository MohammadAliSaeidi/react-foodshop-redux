import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, {Autoplay} from 'swiper'
import Slogan from "../Slogan";
import './HeroSection.css'

// Assets
import bg from '../../../assets/bg.jpg'
import brushImg from '../../../assets/brush.png'
import {ReactComponent as DeliveryIcon} from '../../../assets/icons/delivery.svg'
import {ReactComponent as DishIcon} from '../../../assets/icons/dish.svg'
import {ReactComponent as PizzaIcon} from '../../../assets/icons/pizza.svg'
import Slide1 from "./Slides/Slide1";

export default function HeroSection() {
    SwiperCore.use([Autoplay])

    return (
        <section className='hero-section'>
            <div className='hero-section--swiper' style={{backgroundImage: `url(${bg})`}}>
                <Swiper
                    slidesPerView={1}
                    speed={2000}
                    loop
                    // autoplay=
                    //     {{
                    //         delay: 2000,
                    //         disableOnInteraction: false
                    //     }}
                >
                    <SwiperSlide className='pizza-swiper-slide'>
                        <Slide1/>
                    </SwiperSlide>

                    <SwiperSlide className='pizza-swiper-slide'>
                        <Slide1/>
                    </SwiperSlide>

                    <SwiperSlide className='pizza-swiper-slide'>
                        <Slide1/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <section className='slogans-section'>
                <div className='brush brush1' style={{backgroundImage: `url(${brushImg})`}}/>
                <div className='content'>
                    <Slogan logo={<DishIcon/>} title='ORDER YOUR FOOD'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>

                    <Slogan logo={<DeliveryIcon/>} title='ORDER YOUR FOOD'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>

                    <Slogan logo={<PizzaIcon/>} title='ORDER YOUR FOOD'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>
                </div>
                <div className='brush brush2' style={{backgroundImage: `url(${brushImg})`}}/>
            </section>
        </section>
    )
}