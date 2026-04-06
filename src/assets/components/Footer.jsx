import React from 'react'

function Footer() {
  return (
    <footer className='bg-white px-6 md:px-16 py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>

        <div className='flex flex-col gap-5'>
          <img src="Logo.png" alt="Logo" className='w-32'/>
          <p className='text-[#3A3A3A] text-sm font-light'>
            আমাদের কোম্পানি উচ্চ মানের পণ্য এবং সেবা প্রদান করে। আমরা গ্রাহক সন্তুষ্টিতে বিশ্বাস করি এবং সর্বদা সেরা অভিজ্ঞতা প্রদানের চেষ্টা করি।
          </p>
          <div className='flex items-center gap-3'>
            <img src="Fb.png" alt="Facebook" className='w-5 cursor-pointer'/>
            <img src="Tw.png" alt="Twitter" className='w-5 cursor-pointer'/>
            <img src="Ig.png" alt="Instagram" className='w-5 cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>দ্রুত লিঙ্ক</h1>
          <p className='hover:text-black cursor-pointer'>হোম</p>
          <p className='hover:text-black cursor-pointer'>দোকান</p>
          <p className='hover:text-black cursor-pointer'>ব্লগ</p>
          <p className='hover:text-black cursor-pointer'>যোগাযোগ</p>
          <p className='hover:text-black cursor-pointer'>সম্পর্কে</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>সাহায্য এবং তথ্য</h1>
          <p className='hover:text-black cursor-pointer'>আপনার অর্ডার ট্র্যাক করুন</p>
          <p className='hover:text-black cursor-pointer'>শিপিং নীতি</p>
          <p className='hover:text-black cursor-pointer'>রিটার্ন নীতি</p>
          <p className='hover:text-black cursor-pointer'>প্রশ্নোত্তর</p>
          <p className='hover:text-black cursor-pointer'>আমাদের সাথে যোগাযোগ করুন</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>যোগাযোগ করুন</h1>
          <p> ঢাকা, বাংলাদেশ</p>
          <p> +880 1234-567890</p>
          <p> support@example.com</p>
          <p> সোম - শুক্র: সকাল 9টা - বিকাল 6টা</p>
        </div>
      </div>

      
      <div className='border-t mt-10 pt-5 text-center text-sm text-gray-500'>
        © 2026 আপনার কোম্পানি। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  )
}

export default Footer
