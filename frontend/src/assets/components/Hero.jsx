import React, { useState } from 'react'

function HeroSlider() {
  const [current,setCurrent] = useState(0);
  const Slider = [
    {
      id : 1,
      f_heading : "আপনার পণ্য",
      l_heading : "দুর্দান্ত।",
      btn : "পণ্য কিনুন",
      img_src : "Hero.png"
    },
    {
      id : 2,
      f_heading : "ফোনে 40% ছাড়",
      l_heading : "24 ঘন্টার জন্য",
      btn : "অফার পান",
      img_src : "Iphone.Hero2.png"
    },
    {
      id : 3,
      f_heading : "43% ছাড়",
      l_heading : "আইফোন",
      btn : "আইফোন কিনুন",
      img_src : "Iphone-16.png"
    }
  ]
  const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % Slider.length);
};
const prevSlide = () => {
  setCurrent((prev) => (prev - 1 + Slider.length) % Slider.length);
};
const Sliding = Slider[current];
  return (
    <section className="relative w-full min-h-screen bg-[#f3f6f9] flex items-center overflow-hidden">
      <div onClick={prevSlide} className="absolute left-4 md:left-10 z-20 cursor-pointer text-gray-300 hover:text-gray-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      
      <div className='flex flex-col lg:flex-row w-full items-center justify-between gap-8 container mx-auto px-6 md:px-14 py-8'>
        
    
        <div className="z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-tight text-gray-800 leading-[1.1] uppercase mt-6 md:mt-8 lg:mt-0">
            {Sliding.f_heading} <br /> {Sliding.l_heading}
          </h1>
          <button className="mt-8 bg-[#222] text-white text-[10px] md:text-xs font-bold py-3 px-10 tracking-[0.2em] hover:bg-black transition-all uppercase">
            {Sliding.btn}
          </button>
          <p className="mt-4 text-[#272727] text-[12px] uppercase">banner: {Sliding.id}</p>
        </div>

       
        <div className='relative z-10 mt-10 lg:mt-0 flex items-center justify-center lg:w-1/2'>
          <img src={Sliding.img_src} alt="Product" className="max-w-full h-auto drop-shadow-xl" />
        </div>
      </div>

      <div onClick={nextSlide} className="absolute right-4 md:right-10 z-20 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      
    </section>
  )
}

export default HeroSlider