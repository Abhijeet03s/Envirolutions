const TimeToActNow = () => {
   return (
      <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('/public/plant.jpg')" }}>
         <div className="absolute bg-[#2f2727] inset-0   opacity-50"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
               <h2 className="text-4xl font-bold mb-4 text-white">Time to act now.</h2>
               <p className="text-xl mb-8 text-white">
                  Experience the power of our AI-driven sustainability platform.
               </p>
               <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
                  onClick={() => console.log('Request a demo clicked')}
               >
                  Request a demo
               </button>
            </div>
         </div>
      </div>
   );
};

export default TimeToActNow;