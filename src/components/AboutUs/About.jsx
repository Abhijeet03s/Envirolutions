import lightBulbIcon from '../../assets/bulb.svg';

const AboutUs = () => {
   return (
      <div className="bg-[#fefae1] min-h-screen py-8">
         <div className="container max-w-7xl mx-auto p-10 md:p-8">
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
               <div className="md:w-1/2">
                  <h2 className="text-5xl font-bold text-[#65ae76]">Who</h2>
                  <h2 className="text-5xl font-bold">are we?</h2>
                  <p className="mt-4 w-full md:w-10/12">
                     We are a team of sustainability and software experts with a combined experience of over 25 years in the energy sector and software development. Our team is spread across the globe enabling a better time zone coordination across various time zones.
                  </p>
               </div>
               <div className="md:w-1/2 flex justify-center">
                  <img src={lightBulbIcon} alt="Who are we icon" className="w-52 h-52" />
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 mt-12">
               <div className="md:w-1/2 order-2 md:order-1 flex justify-center mt-10 md:mt-0">
                  <img src={lightBulbIcon} alt="What do we do icon" className="w-52 h-52" />
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                  <h2 className="text-5xl font-bold text-[#65ae76]">What</h2>
                  <h2 className="text-5xl font-bold">do we do?</h2>
                  <p className="mt-4 w-full md:w-10/12">
                     Sustain cred helps small medium business in renewable energy sector to measure their carbon credits and consult in the verification process to register them in voluntary carbon credit markets.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
