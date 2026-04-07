import React from 'react';

function Letter() {
  return (
    <section className="flex items-center justify-center px-6 md:px-16 py-10">
      
      <div className="w-full max-w-5xl bg-[#272727] p-8 md:p-16">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl text-white font-bold">
              Subscribe to our newsletter
            </h1>
            <p className="text-[#b0b0b0] text-sm mt-2 max-w-md">
              Subscribe to our mailing list to get updates in your email inbox.
            </p>
          </div>

      
          <div className="flex w-full lg:w-auto flex-col sm:flex-row items-center">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-72 px-4 py-[16px] bg-[#EEEEEE] text-black placeholder:text-[#888] border border-[#444] focus:outline-none focus:ring-2 transition duration-300"
            />

            <button className="w-full sm:w-auto bg-[#72AEC8] text-white font-semibold px-[40px] py-[16px] hover:bg-[#5d8fa3] transition duration-300">
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Letter;