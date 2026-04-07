import React from 'react'

function Footer() {
  return (
    <footer className='bg-white px-6 md:px-16 py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>

        <div className='flex flex-col gap-5'>
          <img src="Logo.png" alt="Logo" className='w-32'/>
          <p className='text-[#3A3A3A] text-sm font-light'>
            Our company delivers high-quality products and services. We believe in customer satisfaction and always strive to provide the best experience.
          </p>
          <div className='flex items-center gap-3'>
            <img src="Fb.png" alt="Facebook" className='w-5 cursor-pointer'/>
            <img src="Tw.png" alt="Twitter" className='w-5 cursor-pointer'/>
            <img src="Ig.png" alt="Instagram" className='w-5 cursor-pointer'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>Quick Links</h1>
          <p className='hover:text-black cursor-pointer'>Home</p>
          <p className='hover:text-black cursor-pointer'>Shop</p>
          <p className='hover:text-black cursor-pointer'>Blog</p>
          <p className='hover:text-black cursor-pointer'>Contact</p>
          <p className='hover:text-black cursor-pointer'>About</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>Help & Information</h1>
          <p className='hover:text-black cursor-pointer'>Track your order</p>
          <p className='hover:text-black cursor-pointer'>Shipping policy</p>
          <p className='hover:text-black cursor-pointer'>Return policy</p>
          <p className='hover:text-black cursor-pointer'>FAQ</p>
          <p className='hover:text-black cursor-pointer'>Contact us</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-[#3A3A3A] mb-2'>Contact Us</h1>
          <p>Dhaka, Bangladesh</p>
          <p>+880 1234-567890</p>
          <p>support@example.com</p>
          <p>Mon - Fri: 9AM - 6PM</p>
        </div>
      </div>

      
      <div className='border-t mt-10 pt-5 text-center text-sm text-gray-500'>
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
