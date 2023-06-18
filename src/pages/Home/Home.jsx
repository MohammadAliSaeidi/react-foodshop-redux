import './Home.css'
import Header from "../../components/Header";
import HeroSection from "./HeroSection";

export default function     Home() {
    return (
        <div className={'home'}>
            <Header />
            <HeroSection />
        </div>
    )
}