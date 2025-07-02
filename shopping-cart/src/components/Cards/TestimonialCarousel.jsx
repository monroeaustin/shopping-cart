import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alex Furnitureman",
    role: "Founder, CozyNest Interiors",
    review:
      "Thanks to Panto, our staging setups look sleek, modern, and high-end without breaking the budget.",
    image: "/bg-2.svg",
    avatar: "/avatar-1.svg",
    rating: 4,
  },
  {
    id: 2,
    name: "Jasmine Ray",
    role: "Interior Tech Specialist",
    review:
      "I use Panto pieces in all my smart home demos — clients love the aesthetic and practicality.",
    image: "/bg-1.svg",
    avatar: "/avatar-2.svg",
    rating: 5,
  },
  {
    id: 3,
    name: "Derek Lin",
    role: "3D Product Designer",
    review:
      "It’s rare to find furniture that photographs so well for AR/VR mockups. Panto nails it every time.",
    image: "/bg-3.svg",
    avatar: "/avatar-3.svg",
    rating: 4,
  },
];

function TestimonialCarousel() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h3 className="text-sm tracking-widest text-[#E58411] font-semibold mb-2">
        TESTIMONIALS
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Client Reviews</h2>

      <div className="relative max-w-6xl mx-auto flex justify-center items-start gap-6 flex-wrap">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "420px",
              width: "300px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-6 rounded-t-3xl">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full mx-auto -mt-10 border-2 border-white object-cover"
              />
              <h4 className="font-bold mt-2">{item.name}</h4>
              <p className="text-xs text-gray-500 mb-3">{item.role}</p>
              <p className="text-sm text-gray-600 italic">“{item.review}”</p>
              <div className="flex justify-center text-[#E58411] mt-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialCarousel;
