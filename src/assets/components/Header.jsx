import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="px-4 md:px-10 lg:px-20 xl:px-[310px] py-4 md:py-6 flex items-center justify-between">
        
        
        <img 
          src="Logo.png" 
          alt="Logo" 
          className="h-8 md:h-10 lg:h-11" 
        />

      
        <nav className="hidden md:flex items-center gap-0 md:gap-x-4 lg:gap-8 text-[15px] lg:text-[17px] font-medium text-gray-700">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Shop</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Blog</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>

      
        <div className="flex items-center gap-3 md:gap-5">
          <img src="ion_search.png" className="h-5 w-5 cursor-pointer" />
          <img src="ion_person.png" className="h-5 w-5 cursor-pointer" />
          <img src="ion_cart.png" className="h-5 w-5 cursor-pointer" />

        
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      
      <div className={`md:hidden bg-none px-6 pb-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col gap-4 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>

    </header>
  );
}

export default Header;