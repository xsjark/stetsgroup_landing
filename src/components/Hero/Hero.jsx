import HeroOverlay from '../HeroOverlay/HeroOverlay'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-container">
            <HeroOverlay />
            <img src="./images/hero1.jpg" />
        </div>
    )
}

export default Hero