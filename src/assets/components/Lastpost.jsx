import React from 'react'

function Lastpost() {
  return (
    <div>
       <section className='flex flex-col px-6 md:px-20 lg:px-40 py-12 uppercase'>
              <h1 className='text-2xl font-bold mb-4'>Latest Posts</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                     <div className='flex flex-col'>
                      <img src="PS5.png" alt="" className="w-full h-auto" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>ফেব 22, 2023  -  গ্যাজেটস</p>
                        <p className='text-lg font-bold mt-2'>2023 এ কিছু কুল গ্যাজেট পান</p>
                      </div>
                     </div>
                                          <div className='flex flex-col'>
                      <img src="Airphone.png" className='w-full h-auto' alt="" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>Feb 22, 2023  -  Technology</p>
                        <p className='text-lg font-bold mt-2'>Tech hacks you won't want to miss</p>
                      </div>
                     </div>
                                          <div className='flex flex-col'>
                      <img src="cemera.png" alt="" className="w-full h-auto" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>Feb 22, 2023  -  Camera</p>
                        <p className='text-lg font-bold mt-2'>Top 10 compact cameras in the world</p>
                      </div>
                     </div>
              </div>
       </section>
    </div>
  )
}

export default Lastpost