import sustainCredLogo from '../../assets/sustaincred-logo.svg';

const Hero = () => {

   return (
      <section className="bg-gradient-to-r from-[#071204] via-[#041e02] to-[#041e02]">
         <div className="container max-w-7xl mx-auto px-8 py-16 md:py-24 lg:py-32 md:flex md:items-center md:px-8">
            <div className="md:w-1/2 lg:w-3/5 flex items-center justify-center mb-8 md:mb-0">
               <div className="w-full h-[300px] sm:h-[400px] md:h-[450px]">
                  <img src={sustainCredLogo} alt="sustaincred-logo" className="w-full h-full object-contain" />
               </div>
            </div>
            <div className="md:w-1/2 lg:w-2/5 md:ml-8">
               <h1 className="font-inter tracking-wide text-4xl sm:text-5xl lg:text-6xl font-bold text-[#66AD76] leading-tight md:leading-[1.2]">
                  Empowering <span className='text-[#FEFAE1]'>Carbon</span> <span className='text-[#FEFAE1]'>Credit</span> Sustainability
               </h1>
               <p className="mt-6 text-[#FEFAE1] text-base sm:text-lg">
                  SustainCred is helping large and complex organizations measure their impact, identify credible levers and reduce at scale, leveraging the power of AI.
               </p>
               <div className="mt-8 sm:mt-10">
                  <a href="#" className="inline-block px-6 py-4 bg-[#FEFAE1] text-lg text-[#192318] font-semibold rounded-2xl border-2 hover:border-[#FEFAE1] hover:bg-[#064627] hover:text-[#FEFAE1] transition-all duration-300 transform hover:scale-105">
                     Request a demo
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;