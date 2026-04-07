import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Comment() {
  const comments = [
    {
      img: "/cot.png",
      text: "This mobile phone delivers impressive performance with a fast processor, bright display, and long-lasting battery life. Its camera captures sharp photos in a variety of lighting conditions, making it a reliable choice.",
      stars: "/Stars.png",
      name: "Eva",
    },
    {
      img: "/cot.png",
      text: "This product is excellent quality and met my expectations. Delivery was fast and the packaging was great. I would recommend it.",
      stars: "/Stars.png",
      name: "Emma",
    },
    {
      img: "/cot.png",
      text: "This mobile phone delivers impressive performance with a fast processor, bright display, and long-lasting battery life. Its camera captures sharp photos in a variety of lighting conditions, making it a reliable choice.",
      stars: "/Stars.png",
      name: "Alex",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % comments.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [comments.length]);

  const current = comments[index];

  return (
    <section className="flex flex-col items-center gap-4 mt-10 px-8 md:px-16 lg:px-20 py-6">
      <div className="flex flex-col items-center text-center max-w-xl">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Image */}
            <img src={current.img} alt="quote" className="w-12" />

            {/* Text */}
            <p className="text-gray-600 leading-relaxed mt-3">
              {current.text}
            </p>

            {/* Stars + Name */}
            <div className="flex flex-col items-center mt-3">
              <img src={current.stars} alt="stars" className="w-24" />
              <p className="mt-1 font-semibold">{current.name}</p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Comment;