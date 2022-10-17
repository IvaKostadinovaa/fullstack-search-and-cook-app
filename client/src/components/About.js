import { LoremIpsum } from 'react-lorem-ipsum'
import image from '../assets/family.jpg'

const About = () => {
    return (
        <section className="section about-section">
            <div>
                <h1 className="about-title">about us</h1>
                <p className="par-about">
                    <LoremIpsum />
                </p>
            </div>
            <div>
                <img className="img-about" src={image} alt="Family image" />
            </div>
        </section>
    )
}

export default About
