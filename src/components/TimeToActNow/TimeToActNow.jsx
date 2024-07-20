const TimeToActNow = () => {
   return (
      <section
         className="relative bg-cover bg-center py-16 px-6 md:px-12"
         style={{ backgroundImage: "url('../../assets/chimney.jpg')" }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
         <div className="relative container mx-auto text-center text-white rounded-lg bg-cyan-500 opacity-50">
            <h2 className="text-4xl md:text-5xl font-bold">
               Time to act now.
            </h2>
            <p className="text-lg md:text-xl mt-4">
               Experience the power of our AI-driven sustainability platform.
            </p>
            <div className="mt-8">
               <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg md:text-xl">
                  Request a demo
               </button>
            </div>
         </div>
      </section>
   );
};

export default TimeToActNow;
