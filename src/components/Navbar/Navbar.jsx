import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/brand-logo.svg';
import '../Navbar/Navbar.css';

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="bg-[#192318] shadow-md">
         <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="flex justify-between items-center py-4">
               <div className="flex items-center">
                  <Link to='/'>
                     <img src={brandLogo} alt="Logo" className="h-8 mr-2" />
                  </Link>
               </div>
               <div className="hidden md:flex items-center space-x-6 text-[#FEFAE1] text-bold">
                  <Link to="/about-us" className="hover:bg-[#FEFAE1]/10 px-4 py-2 rounded-lg transition duration-300">
                     About Us
                  </Link>
                  <Link to="/our-products" className="hover:bg-[#FEFAE1]/10 px-4 py-2 rounded-lg transition duration-300">
                     Our Product
                  </Link>
                  <Link to="/blogs" className="hover:bg-[#FEFAE1]/10 px-4 py-2 rounded-lg transition duration-300">
                     Blogs
                  </Link>
                  <Link to="/contact-us" className="hover:bg-[#FEFAE1]/10 px-4 py-2 rounded-lg transition duration-300">
                     Contact
                  </Link>
                  <button>
                     <Link to="/sign-in" className="bg-[#FEFAE1] px-4 py-2 text-[#192318] rounded-lg">
                        Sign In
                     </Link>
                  </button>
               </div>
               <div className="md:hidden flex items-center">
                  <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                     {isOpen ? (
                        <svg className="w-6 h-6 text-[#FEFAE1]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                           <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                     ) : (
                        <svg className="w-6 h-6 text-[#FEFAE1]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                           <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                     )}
                  </button>
               </div>
            </div>
         </div>
         <div className={`mobile-menu ${isOpen ? "block" : "hidden"} md:hidden text-[#FEFAE1] text-bold`}>
            <ul className="px-4 py-2">
               <li className="mb-2">
                  <Link to="/about-us" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-300">
                     About Us
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/our-products" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-200">
                     Our Product
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/blogs" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-200">
                     Blogs
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/contact-us" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-200">
                     Contact
                  </Link>
               </li>
               <li>
                  <Link to="/sign-in" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-200">
                     Sign In
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
