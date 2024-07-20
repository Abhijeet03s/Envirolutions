import brandLogo from '../../assets/tight-bounds.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="bg-[#315343] text-white py-12 px-6 md:px-12">
         <div className="container mx-auto max-w-7xl lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:gap-24">
               <div className="mb-8 md:mb-0">
                  <img src={brandLogo} alt="Logo" className="h-10" />
               </div>
               <div className="flex-grow">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                     <div>
                        <h4 className="font-bold text-xl">Services</h4>
                        <ul className="mt-4 space-y-2">
                           <li><a href="#" className="text-[#F5F5F5]">SC-Services</a></li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-xl">Company</h4>
                        <ul className="mt-4 space-y-2">
                           <li><a href="#" className="text-[#F5F5F5]">Careers</a></li>
                           <li><a href="#" className="text-[#F5F5F5]">Our approach</a></li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-xl">Legal & Support</h4>
                        <ul className="mt-4 space-y-2">
                           <li><a href="#" className="text-[#F5F5F5]">Cookie policy</a></li>
                           <li><a href="#" className="text-[#F5F5F5]">Privacy Preference</a></li>
                           <li><a href="#" className="text-[#F5F5F5]">FAQ</a></li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold text-xl">Follow Us</h4>
                        <div className="flex space-x-4 mt-4">
                           <a href="#" className="text-[#F5F5F5] hover:text-gray-400"><FaFacebookF /></a>
                           <a href="#" className="text-[#F5F5F5] hover:text-gray-400"><FaTwitter /></a>
                           <a href="#" className="text-[#F5F5F5] hover:text-gray-400"><FaLinkedinIn /></a>
                           <a href="#" className="text-[#F5F5F5] hover:text-gray-400"><FaInstagram /></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                  <p className="text-sm mb-4 md:mb-0">&copy; 2024 SustainCred, All Rights Reserved</p>
                  <div className="flex space-x-4">
                     <a href="#" className="text-[#F5F5F5] hover:text-gray-400">Privacy Policy</a>
                     <a href="#" className="text-[#F5F5F5] hover:text-gray-400">Terms & Conditions</a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;