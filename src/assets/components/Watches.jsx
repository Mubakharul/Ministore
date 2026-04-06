import React from 'react'

function Watches() {
  return (
    <>
  <section className='flex flex-col items-center gap-6 px-4 md:px-12 py-8'>
  <h1 className='text-center text-xl md:text-2xl font-bold'>স্মার্ট ওয়াচ</h1>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center text-[#272727]'>
    <div>
    <img src="pinkwatach.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>পিঙ্ক ওয়াচ</p>
      <p className='text-[#72AEC8]'>$870</p>
    </div>
    </div>
    <div>
    <img src="Heavyw.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>হেভি ওয়াচ</p>
      <p className='text-[#72AEC8]'>$750</p>
    </div>
    </div>
    <div>
    <img src="spott.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>স্পটেড ওয়াচ</p>
      <p className='text-[#72AEC8]'>$680</p>
    </div>
    </div>
    <div>
    <img src="Black.png" alt="" />
    <div className="flex flex-col lg:flex-row justify-between uppercase ">
      <p>ব্ল্যাক ওয়াচ</p>
      <p className='text-[#72AEC8]'>$650</p>
    </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Watches