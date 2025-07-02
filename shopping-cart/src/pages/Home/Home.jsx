import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import SectionOne from "../../components/Sections/SectionOne.jsx";
import BestSelling from "../../components/Sections/BestSelling.jsx";
import Footer from "../../components/Footer.jsx";
import TestimonialCarousel from "../../components/Cards/TestimonialCarousel.jsx";
function HomePage() {

    return (
        <>
            
            <Hero></Hero>
            <SectionOne></SectionOne>
            <BestSelling></BestSelling>
            <TestimonialCarousel></TestimonialCarousel>
            <Footer></Footer>
            
        </>

    )
}
export default HomePage;