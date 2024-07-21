import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import brandLogo from '../../assets/brand-logo.svg';
import '../Navbar/Navbar.css';

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();

   const getLinkClass = (path) => {
      return location.pathname === path ? 'bg-[#FEFAE1] text-[#192318]' : 'hover:bg-[#FEFAE1]/10 transition duration-300';
   };

   const handleLinkClick = () => {
      setTimeout(() => {
         setIsOpen(false);
      }, 30); // 300ms delay
   };

   return (
      <nav className="bg-[#192318] shadow-md">
         <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="flex justify-between items-center py-4">
               <div className="flex items-center">
                  <Link to='/' onClick={handleLinkClick}>
                     <img src={brandLogo} alt="Logo" className="h-8 mr-2" />
                  </Link>
               </div>
               <div className="hidden md:flex items-center space-x-6 text-[#FEFAE1] font-bold">
                  <Link to="/about-us" className={`px-4 py-2 rounded-lg ${getLinkClass('/about-us')}`}>
                     About Us
                  </Link>
                  <Link to="/our-products" className={`px-4 py-2 rounded-lg ${getLinkClass('/our-products')}`}>
                     Our Product
                  </Link>
                  <Link to="/blogs" className={`px-4 py-2 rounded-lg ${getLinkClass('/blogs')}`}>
                     Blogs
                  </Link>
                  <Link to="/contact-us" className={`px-4 py-2 rounded-lg ${getLinkClass('/contact-us')}`}>
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
         <div className={`mobile-menu ${isOpen ? "open" : "closed"} md:hidden text-[#FEFAE1] font-bold`}>
            <ul className="px-4 py-2">
               <li className="mb-2">
                  <Link to="/about-us" className={`block px-4 py-2 rounded-lg ${getLinkClass('/about-us')}`} onClick={handleLinkClick}>
                     About Us
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/our-products" className={`block px-4 py-2 rounded-lg ${getLinkClass('/our-products')}`} onClick={handleLinkClick}>
                     Our Product
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/blogs" className={`block px-4 py-2 rounded-lg ${getLinkClass('/blogs')}`} onClick={handleLinkClick}>
                     Blogs
                  </Link>
               </li>
               <li className="mb-2">
                  <Link to="/contact-us" className={`block px-4 py-2 rounded-lg ${getLinkClass('/contact-us')}`} onClick={handleLinkClick}>
                     Contact
                  </Link>
               </li>
               <li>
                  <Link to="/sign-in" className="block px-4 py-2 rounded-lg hover:bg-[#FEFAE1]/10 hover:text-[#FEFAE1] transition duration-300" onClick={handleLinkClick}>
                     Sign In
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;
