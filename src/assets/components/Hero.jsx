import React, { useState } from "react";

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const Slider = [
    {
      id: 1,
      f_heading: "Your Product",
      l_heading: "Amazing.",
      btn: "Shop Products",
      img_src: "/Hero.png",
    },
    {
      id: 2,
      f_heading: "40% Off Phones",
      l_heading: "For 24 Hours",
      btn: "Get Offer",
      img_src: "/Iphone.Hero2.png",
    },
    {
      id: 3,
      f_heading: "43% Off",
      l_heading: "iPhone",
      btn: "Buy iPhone",
      img_src: "/Iphone-16.png",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Slider.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + Slider.length) % Slider.length);
  };

  const item = Slider[current];

  return (
    <section className="w-full bg-[#f3f6f9] overflow-hidden">
      {/* Container - added min-h to keep height consistent */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 py-12 md:py-20 min-h-[500px] flex items-center">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">

          {/* Text Section - Animation key added to trigger re-render animation */}
          <div key={`text-${item.id}`} className="text-center lg:text-left space-y-6 order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight leading-tight text-gray-800 uppercase">
              {item.f_heading} <br /> 
              <span className="font-bold">{item.l_heading}</span>
            </h1>

            <button className="bg-black text-white text-sm font-bold py-3 px-10 tracking-widest hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              {item.btn}
            </button>

            <p className="text-xs text-gray-400 uppercase tracking-widest">
              Slide: {item.id} / {Slider.length}
            </p>
          </div>

          {/* Image Section */}
          <div key={`img-${item.id}`} className="flex justify-center order-1 lg:order-2 animate-fadeIn">
            <img
              src={item.img_src}
              alt="product"
              // Optimized image sizing for mobile
              className="w-auto h-[250px] sm:h-[350px] lg:h-[450px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Navigation Arrows - Better mobile positioning */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="pointer-events-auto bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots (Optional but good for UX) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Slider.map((_, index) => (
            <div 
              key={index}
              className={`h-1.5 transition-all duration-300 rounded-full ${current === index ? "w-8 bg-black" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HeroSlider;