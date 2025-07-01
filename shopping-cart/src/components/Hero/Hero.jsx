import React from "react";
import Header from "../Header/Header.jsx";
import { FiSearch } from "react-icons/fi";
import SearchBar from "../Search/SearchBar.jsx";
function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center text-white overflow-x-hidden"
      style={{ backgroundImage: "url('/Hero.svg')" }}
    >
   
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white/15 z-0"></div>

      <div className="relative z-10">
        <Header />
      </div>

      
      <div className="absolute z-20 w-full h-full pointer-events-none">
 
        <img
          src="../../../public/IconBubble.svg"
          alt="bubble"
          className="absolute bottom-[20%] left-[7%] w-10 h-10"
        />

   
        <img
          src="../../../public/IconBubble.svg"
          alt="bubble"
          className="absolute top-[74%] left-[20%] w-10 h-10"
        />


        <img
          src="../../../public/IconBubble.svg"
          alt="bubble"
          className="absolute bottom-[6%] right-[0%] w-10 h-10"
        />
      </div>

    
      <div className="relative z-10 w-full pt-20 md:pt-40 px-6 text-center">
        <div className="w-full max-w-[1400px] mx-auto">
          <h1 className="text-[90px] leading-[104px] tracking-[-0.01em] font-bold text-white text-center max-w-[1200px] w-full mx-auto">
            Make Your Interior More <br /> Minimalistic & Modern
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-[800px] mx-auto leading-relaxed tracking-wide">
            Turn your room with Panto into a lot more minimalist <br />
            and modern with ease and speed.
          </p>

       
         <SearchBar></SearchBar>
        </div>
      </div>
    </section>
  );
}

export default Hero;
