const SustainMart = () => {
   return (
      <section className="px-8 py-16 md:py-32 bg-[#FEFAE1] md:px-0">
         <div className="container max-w-7xl mx-auto px-0 flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
               <h2 className="font-inter text-4xl md:text-5xl font-bold mb-8 text-[#1E1E1E] text-center md:text-left">Sustain-Mart</h2>
               <p className="text-[#343330] mb-4 text-md text-center md:text-left">
                  At Sustain-Mart, we believe that every action counts in the fight against climate change. Our innovative marketplace brings together individuals, businesses, and organizations committed to reducing their carbon footprint and supporting sustainable practices.
               </p>
               <div className="hidden lg:block">
                  <button>
                     <a href="#" className="inline-block px-6 py-3 bg-[#064627] text-[#FEFAE1] font-semibold rounded-lg">
                        Browse Marketplace
                     </a>
                  </button>
               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
               <div className="grid gap-6 md:gap-10 lg:grid-cols-2 sm:grid-cols-1">
                  <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#65ae76] hover:text-[#FEFAE1] group transition duration-300">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E] group-hover:text-[#FEFAE1]">Eco-friendly Materials</h3>
                     <ul className="list-disc pl-5 text-[#757575] text-sm group-hover:text-[#FEFAE1]">
                        <li className="mb-2">
                           Recycled construction..
                        </li>
                        <li className="mb-2">
                           Biodegradable packaging.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#65ae76] hover:text-[#FEFAE1] group transition duration-300">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E] group-hover:text-[#FEFAE1]">Innovative Recycling</h3>
                     <ul className="list-disc pl-5 text-[#757575] text-sm group-hover:text-[#FEFAE1]">
                        <li className="mb-2">
                           Community recycling programs.
                        </li>
                        <li className="mb-2">
                           Advanced recycling technologies.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#65ae76] hover:text-[#FEFAE1] group transition duration-300">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E] group-hover:text-[#FEFAE1]">Sustainable Services</h3>
                     <ul className="list-disc pl-5 text-[#757575] text-sm group-hover:text-[#FEFAE1]">
                        <li className="mb-2">
                           Green energy consulting.
                        </li>
                        <li className="mb-2">
                           Eco-friendly landscaping.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 hover:bg-[#65ae76] hover:text-[#FEFAE1] group transition duration-300">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E] group-hover:text-[#FEFAE1]">Green Technology</h3>
                     <ul className="list-disc pl-5 text-[#757575] text-sm group-hover:text-[#FEFAE1]">
                        <li className="mb-2">
                           Solar power solutions.
                        </li>
                        <li className="mb-2">
                           Energy-efficient appliances.
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:hidden flex justify-center mt-8">
            <button className="inline-block">
               <a href="#" className="inline-block px-6 py-3 bg-[#064627] text-[#FEFAE1] font-semibold rounded-lg">
                  Browse Marketplace
               </a>
            </button>
         </div>
      </section>
   );
};

export default SustainMart;