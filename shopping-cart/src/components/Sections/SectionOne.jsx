import { MdArrowRightAlt } from "react-icons/md";
import InfoCard from "./InfoCard.jsx";
function SectionOne() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Title */}
        <div className="md:w-1/4 text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug">
            Why <br /> Choosing Us
          </h3>
        </div>

        {/* Info Grid */}
        <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          <InfoCard
            title="Luxury facilities"
            description="The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities."
          />
          <InfoCard
            title="Affordable Price"
            description="You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here."
          />
          <InfoCard
            title="Many Choices"
            description="We provide many unique workspace choices so that you can choose the workspace to your liking."
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
