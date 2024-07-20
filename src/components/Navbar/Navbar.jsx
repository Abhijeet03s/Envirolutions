import { useState } from 'react';
import '../Navbar/Navbar.css';
import brandLogo from '../../assets/brand-logo.svg';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="bg-[#192318] shadow-md">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
               <div className="flex items-center">
                  <img src={brandLogo} alt="Logo" className="h-8 mr-2" />
               </div>
               <div className="hidden md:flex items-center space-x-10 text-[#FEFAE1] text-bold">
                  <a href="#" className="">About Us</a>
                  <a href="#" className="">Our Product</a>
                  <a href="#" className="">Blogs</a>
                  <a href="#" className="">Contact</a>
                  <button><a href="#" className="bg-[#FEFAE1] px-4 py-2 text-[#192318] rounded-lg">Sign In</a></button>
               </div>
               <div className="md:hidden flex items-center">
                  <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                     <svg className="w-6 h-6 text-[#FEFAE1]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         <div className={`mobile-menu ${isOpen ? "block" : "hidden"} md:hidden text-[#FEFAE1] text-bold`}>
            <ul className="">
               <li><a href="#" className="block text-sm px-2 py-4 hover:text-white transition duration-300">About Us</a></li>
               <li><a href="#" className="block text-sm px-2 py-4 hover:text-white transition duration-300">Our Product</a></li>
               <li><a href="#" className="block text-sm px-2 py-4 hover:text-white transition duration-300">Blogs</a></li>
               <li><a href="#" className="block text-sm px-2 py-4 hover:text-white transition duration-300">Contact</a></li>
               <li><a href="#" className="block text-sm px-2 py-4 hover:text-white transition duration-300">Sign In</a></li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
