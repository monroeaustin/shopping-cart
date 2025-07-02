function InfoBlock({ label, title, text, images, reverse }) {
  const isMultiple = images.length > 1;

  return (
    <section
      className={`relative py-20 px-6 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left max-w-lg">
        <p className="text-[#E58411] text-sm font-semibold uppercase tracking-wider mb-2">{label}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-500 mb-6">{text}</p>
        <a href="#" className="text-[#E58411] font-medium inline-flex items-center gap-1">
          More Info <span className="ml-1">→</span>
        </a>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative w-full h-full grid grid-cols-2 gap-4 justify-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative w-full rounded-2xl shadow-lg overflow-hidden ${
              index === 0 && isMultiple ? "row-span-2" : ""
            }`}
          >
            <img
              src={src}
              alt={`info-${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Optional ghost layer for background feel */}
            {index === images.length - 1 && isMultiple && (
              <div className="absolute inset-0 bg-white opacity-20 rounded-2xl -z-10 blur-sm" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default InfoBlock;
