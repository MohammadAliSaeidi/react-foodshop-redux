import './HomePage.css'
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import Menu from "./Menu";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
    return (
        <div className={'home'}>
            <Header/>
            <HeroSection/>
            <Menu />
            <Footer />
        </div>
    )
}