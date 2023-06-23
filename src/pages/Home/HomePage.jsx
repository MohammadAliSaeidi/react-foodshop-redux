import './HomePage.css'
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import Menu from "./Menu";

export default function HomePage() {
    return (
        <div className={'home'}>
            <Header/>
            <HeroSection/>
            <Menu />
        </div>
    )
}