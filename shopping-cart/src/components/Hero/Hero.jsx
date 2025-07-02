import React from "react";
import Header from "../Header/Header.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import ColorPickerBubble from "./ColorPickerBubble.jsx";

function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-no-repeat bg-[center_bottom_20%] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom 20%",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/30 z-0 pointer-events-none" />

      {/* Icon Bubbles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img src="/IconBubble.svg" alt="Bubble" className="absolute left-[8%] bottom-[36%] w-8 h-8" />
        <img src="/IconBubble.svg" alt="Bubble" className="absolute left-[18%] bottom-[34%] w-12 h-24" />
        <img src="/IconBubble.svg" alt="Bubble" className="absolute right-[2%] bottom-[20%] w-8 h-8" />
      </div>

      {/* Header (z-50) */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full pt-20 md:pt-36 px-6 text-center">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-[72px] md:text-[90px] leading-[1.2] font-bold tracking-[-0.01em] text-white max-w-[1200px] mx-auto">
            Make Your Interior More <br /> Minimalistic & Modern
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-[800px] mx-auto leading-relaxed tracking-wide">
            Turn your room with Panto into a lot more minimalist <br />
            and modern with ease and speed.
          </p>
          <SearchBar />
          <ColorPickerBubble />
        </div>
      </div>
    </section>
  );
}

export default Hero;
