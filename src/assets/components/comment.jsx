import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👉 যদি images public folder এ থাকে (public/cot.png, public/Stars.png)
// তাহলে direct string ব্যবহার করা যাবে

function Comment() {
  const comments = [
    {
      img: "/cot.png",
      text: "এই মোবাইল ফোনটি দ্রুত প্রসেসর, উজ্জ্বল ডিসপ্লে এবং দীর্ঘস্থায়ী ব্যাটারি লাইফ সহ চিত্তাকর্ষক পারফরম্যান্স অফার করে। এর ক্যামেরা বিভিন্ন আলোর অবস্থায় তীক্ষ্ণ ফটো ক্যাপচার করে, এটিকে ব্যবহারের জন্য একটি নির্ভরযোগ্য পছন্দ করে তোলে।",
      stars: "/Stars.png",
      name: "এভা",
    },
    {
      img: "/cot.png",
      text: "এই পণ্যটি অসাধারণ মানের এবং আমার প্রত্যাশা পূরণ করেছে। ডেলিভারি দ্রুত ছিল এবং প্যাকেজিং ভালো ছিল। আমি এটি সুপারিশ করব।",
      stars: "/Stars.png",
      name: "এনমা",
    },
    {
      img: "/cot.png",
      text: "এই মোবাইল ফোনটি দ্রুত প্রসেসর, উজ্জ্বল ডিসপ্লে এবং দীর্ঘস্থায়ী ব্যাটারি লাইফ সহ চিত্তাকর্ষক পারফরম্যান্স অফার করে। এর ক্যামেরা বিভিন্ন আলোর অবস্থায় তীক্ষ্ণ ফটো ক্যাপচার করে, এটিকে ব্যবহারের জন্য একটি নির্ভরযোগ্য পছন্দ করে তোলে।",
      stars: "/Stars.png",
      name: "আলেক্স",
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