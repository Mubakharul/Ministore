import React from 'react'

function Mobile() {
  return (
    <>
    <section className='flex flex-col items-center gap-6 px-4 md:px-12 py-8'>
  <h1 className='text-center text-xl md:text-2xl font-bold'>মোবাইল পণ্য</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-[#272727]'>
    <div>
    <img src="iphonesell.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>Iphone 10</p>
      <p className='text-[#72AEC8]'>$980</p>
    </div>
    </div>
    <div>
    <img src="iphone11.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>Iphone 11</p>
      <p className='text-[#72AEC8]'>$1100</p>
    </div>
    </div>
    <div>
    <img src="iphone8.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>Iphone 8</p>
      <p className='text-[#72AEC8]'>$780</p>
    </div>
    </div>
    <div>
    <img src="iphone13.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>Iphone 13</p>
      <p className='text-[#72AEC8]'>$1500</p>
    </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Mobile