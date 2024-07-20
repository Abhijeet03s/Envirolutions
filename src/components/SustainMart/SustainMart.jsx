const SustainMart = () => {
   return (
      <section className="py-16 bg-[#FEFAE1]">
         <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
               <h2 className="text-5xl font-bold mb-8 text-[#1E1E1E]">Sustain-mart</h2>
               <p className="text-gray-600 mb-4">
                  At Sustain-Mart, we believe that every action counts in the fight against climate change. Our innovative marketplace brings together individuals, businesses, and organizations committed to reducing their carbon footprint and supporting sustainable practices.
               </p>
               <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                  Browse Marketplace
               </button>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
               <div className="grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
                  <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Eco-friendly Materials</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Recycled construction materials.
                        </li>
                        <li className="mb-2">
                           Biodegradable packaging solutions.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Innovative Recycling</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Community recycling programs.
                        </li>
                        <li className="mb-2">
                           Advanced recycling technologies.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Sustainable Services</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Green energy consulting.
                        </li>
                        <li className="mb-2">
                           Eco-friendly landscaping.
                        </li>
                     </ul>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Green Technology</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
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
      </section>
   );
};

export default SustainMart;
