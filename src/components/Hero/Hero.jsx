// import sustainCredLogo from '../../assets/SustainCred_Logo.svg';
import Lottie from 'react-lottie';
import animationData from '../../lotties/lottie.json';

const Hero = () => {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: "xMidYMid slice"
      }
   };
   return (
      <section className="bg-gradient-to-r from-[#071204] via-[#041e02] to-[#041e02]">
         <div className="max-w-7xl mx-auto gap-x-10 px-8 py-16 md:py-32 md:flex md:items-center md:px-0">
            <div className="md:mt-0 md:w-1/2">
               <Lottie
                  options={defaultOptions}
               />
            </div>
            <div className="mt-4 md:w-1/2">
               <h1 className="text-5xl font-bold text-[#66AD76] md:text-6xl md:leading-[4.5rem]">
                  Empowering <span className='text-[#FEFAE1]'>Carbon</span> <span className='text-[#FEFAE1]'>Credit</span> Sustainability
               </h1>
               <p className="mt-6 text-[#FEFAE1] text-[0.9375rem] md:text-md">
                  SustainCred is helping large and complex organizations measure their impact, identify credible levers and reduce at scale, leveraging the power of AI.
               </p>
               <div className="mt-10 flex space-x-4">
                  <a href="#" className="inline-block px-6 py-3 bg-[#FEFAE1] text-[#192318] font-semibold rounded-lg transition-colors duration-300 hover:bg-[#064627] hover:text-[#FEFAE1]">
                     Request a demo
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
