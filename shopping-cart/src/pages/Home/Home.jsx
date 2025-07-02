import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import SectionOne from "../../components/Sections/SectionOne.jsx";
import BestSelling from "../../components/Sections/BestSelling.jsx";
import Footer from "../../components/Sections/Footer.jsx";
import TestimonialCarousel from "../../components/Cards/TestimonialCarousel.jsx";
import InfoBlock from "../../components/Sections/InfoBlock.jsx";
function HomePage() {

    return (
        <>

            <Hero></Hero>
            <SectionOne></SectionOne>
            <BestSelling></BestSelling>

            <InfoBlock
                label="Experiences"
                title="We Provide You The Best Experience"
                text="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and premium materials."
                images={["/info-img1.svg"]}
                reverse
            />

            <InfoBlock
                label="Materials"
                title="Very Serious Materials For Making Furniture"
                text="Because Panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price."
                images={["/info-img4.svg", "/info-img2.svg", "/info-img3.svg"]}

            />
            <TestimonialCarousel></TestimonialCarousel>
            <Footer></Footer>

        </>

    )
}
export default HomePage;