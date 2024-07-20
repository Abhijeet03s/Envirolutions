
const ResearchDiscovery = () => {
   return (
      <section className="pt-16 pb-8 bg-[#002A16]">
         <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-start">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 ">
               <div className="grid gap-8">
                  <div className="bg-white rounded-lg shadow-md p-4">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Our Focus Areas</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Circular Economy: Exploring systems and technologies that minimize waste and maximize resource efficiency.
                        </li>
                        <li className="mb-2">
                           Sustainable Materials: Researching biodegradable alternatives and recycling technologies for various industries.
                        </li>
                     </ul>
                  </div>
                  {/* <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">What We Offer</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Innovation Showcase: Explore cutting-edge technologies and methodologies being developed and implemented worldwide.
                        </li>
                        <li className="mb-2">
                           Expert Network: Connect with leading researchers, practitioners, and policymakers in the field.
                        </li>
                     </ul>
                  </div> */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                     <h3 className="text-xl font-semibold mb-4 text-[#1E1E1E]">Why Join Our Platform?</h3>
                     <ul className="list-disc pl-5 text-[#757575]">
                        <li className="mb-2">
                           Real-World Impact: Our research directly informs policy decisions and industry practices, creating tangible environmental benefits.
                        </li>
                        <li className="mb-2">
                           Global Perspective: Access insights and case studies from around the world, adapting solutions to local contexts.
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12 text-[#FEFAE1] mb-8 lg:mb-0">
               <h2 className="text-5xl font-bold mb-8">Research and Discovery</h2>
               <p className="mb-4 text-[16px]">
                  Welcome to our Research and Discovery platform, where we dive deep into the
                  critical issues of waste management and sustainability. Our mission is to
                  provide cutting-edge research, innovative solutions, and a collaborative space
                  for scientists, policymakers, and industry leaders to address one of the most
                  pressing challenges of our time.
               </p>
            </div>
         </div>
      </section>
   );
};

export default ResearchDiscovery;
