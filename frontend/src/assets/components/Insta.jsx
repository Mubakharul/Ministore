import React from 'react'

function Insta() {
  const images = [
    "PS5.png",
    "spott.png",
    "iphone11.png",
    "spott.png",
    "Airphone.png"
  ]

  return (
    <section className="px-6 py-10">
      
      
      <h1 className="text-3xl font-bold text-center uppercase mb-8 tracking-wider">
        আমাদের ইনস্টা শপ করুন
      </h1>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden">
            
          
            <img 
              src={img} 
              alt="insta"
              className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-110"
            />

            
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-2xl"><img src="social.png" alt="" /></span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Insta