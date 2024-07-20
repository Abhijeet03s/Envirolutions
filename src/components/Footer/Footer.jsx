import brandLogo from '../../assets/tight-bounds.svg'

const Footer = () => {
   return (
      <footer className="bg-[#315343] text-white py-12 px-6 md:px-12">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center md:items-start">
               <img src={brandLogo} alt="Logo" className="h-10 mb-4" />
            </div>
            <div>
               <h4 className="font-bold text-xl">Services</h4>
               <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-[#F5F5F5]">SC-Services</a></li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-xl">Company</h4>
               <ul className="mt-4 space-y-2">
                  <li><a href="#" className=" text-[#F5F5F5]">Careers</a></li>
                  <li><a href="#" className=" text-[#F5F5F5]">Our approach</a></li>
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-xl">Legal & Support</h4>
               <ul className="mt-4 space-y-2">
                  <li><a href="#" className=" text-[#F5F5F5]">Cookie policy</a></li>
                  <li><a href="#" className=" text-[#F5F5F5]">Privacy Preference</a></li>
                  <li><a href="#" className=" text-[#F5F5F5]">FAQ</a></li>
               </ul>
            </div>
         </div>
         <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
               <p className="text-sm mb-4 md:mb-0">&copy; 2024 SustainCred, All Rights Reserved</p>
               <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
