import React from 'react'

function Lastpost() {
  return (
    <div>
       <section className='flex flex-col px-6 md:px-20 lg:px-40 py-12 uppercase'>
              <h1 className='text-2xl font-bold mb-4'>সর্বশেষ পোস্ট</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                     <div className='flex flex-col'>
                      <img src="PS5.png" alt="" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>ফেব 22, 2023  -  গ্যাজেটস</p>
                        <p className='text-lg font-bold mt-2'>2023 এ কিছু কুল গ্যাজেট পান</p>
                      </div>
                     </div>
                                          <div className='flex flex-col'>
                      <img src="Airphone.png" className='' alt="" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>ফেব 22, 2023  -  প্রযুক্তি</p>
                        <p className='text-lg font-bold mt-2'>প্রযুক্তি হ্যাক যা আপনি পাবেন না</p>
                      </div>
                     </div>
                                          <div className='flex flex-col'>
                      <img src="cemera.png" alt="" />
                      <div>
                        <p className='text-[#848484] text-[13px] font-normal'>ফেব 22, 2023  -  ক্যামেরা</p>
                        <p className='text-lg font-bold mt-2'>বিশ্বের টপ 10 ছোট ক্যামেরা</p>
                      </div>
                     </div>
              </div>
       </section>
    </div>
  )
}

export default Lastpost