import React from 'react';

const Choseus = () => {
  const features = [
    {
      id: 1,
      icon: "cartb.png",
      title: "Free Delivery",
      desc: "On all orders over $200",
    },
    {
      id: 2,
      icon: "q.png", 
      title: "Quality Guarantee",
      desc: "Verified by experts",
    },
    {
      id: 3,
      icon: "offers.png", 
      title: "Daily Offers",
      desc: "Save up to 25%",
    },
    {
      id: 4,
      icon: "s.png", 
      title: "Secure Payment",
      desc: "100% secure checkout",
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