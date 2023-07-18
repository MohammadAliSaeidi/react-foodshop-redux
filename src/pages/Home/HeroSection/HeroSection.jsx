import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, {Autoplay} from 'swiper'
import Slogan from "../Slogan";
import './HeroSection.css'
import brushImg from '../../../assets/brush.png'
import Slide1 from "./Slides/Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";

export default function HeroSection() {
    SwiperCore.use([Autoplay])

    return (
        <section className='hero-section'>
            <div className="hero-section--swiper"
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg_1.jpg.webp'})`, flex: 1}}>
                <Swiper
                    slidesPerView={1}
                    speed={2000}
                    loop
                    // autoplay=
                    //     {{
                    //         delay: 2000,
                    //         disableOnInteraction: false
                    //     }}
                    style={{height: '100%'}}
                >
                    <SwiperSlide style={{height: '100%'}}>
                        <Slide1/>
                    </SwiperSlide>

                    <SwiperSlide style={{height: '100%'}}>
                        <Slide2/>
                    </SwiperSlide>

                    <SwiperSlide style={{height: '100%'}}>
                        <Slide3/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <section className='slogans-section'>
                <div className='brush brush1' style={{backgroundImage: `url(${brushImg})`}}/>
                <div className='content'>
                    <Slogan logo={<img src={process.env.PUBLIC_URL + '/images/diet.png'} alt=""/>} title='HEALTHY FOODS'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>

                    <Slogan logo={<img src={process.env.PUBLIC_URL + '/images/fast-delivery.png'} alt=""/>} title='FASTEST DELIVERY'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>

                    <Slogan logo={<img src={process.env.PUBLIC_URL + '/images/pizza-slice.png'} alt=""/>} title='ORIGINAL RECIPES'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eius-'/>
                </div>
                <div className='brush brush2' style={{backgroundImage: `url(${brushImg})`}}/>
            </section>
        </section>
    )
}