import React from 'react';

const Choseus = () => {
  const features = [
    {
      id: 1,
      icon: "cartb.png",
      title: "বিনামূল্যে ডেলিভারি",
      desc: "$200 এর উপরে সব অর্ডারের জন্য",
    },
    {
      id: 2,
      icon: "q.png", 
      title: "মানের গ্যারান্টি",
      desc: "বিশেষজ্ঞদের দ্বারা যাচাইকৃত",
    },
    {
      id: 3,
      icon: "offers.png", 
      title: "দৈনিক অফার",
      desc: "25% পর্যন্ত সেভ করুন",
    },
    {
      id: 4,
      icon: "s.png", 
      title: "নিরাপদ পেমেন্ট",
      desc: "100% নিরাপদ চেকআউট",
    },
  ];

  return (
    <section className="bg-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center gap-4 p-4"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-full h-full object-contain"
              />
            </div>

          
            <div className="flex flex-col">
              <h2 className="text-[#272727] text-lg font-semibold leading-tight">
                {item.title}
              </h2>
              <p className="text-sm text-[#3A3A3A] mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choseus;