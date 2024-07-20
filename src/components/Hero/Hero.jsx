import './Hero.css';
import heroImage from '../../assets/Hero-section-image.svg';

const Hero = () => {
   return (
      <section className="bg-hero-color">
         <div className="max-w-7xl mx-auto gap-x-10 px-10 py-16 md:flex md:items-center md:px-0">
            <div className="mt-8 md:mt-0 md:w-1/2">
               <img src={heroImage} alt="Sustainability-Energy" className="w-full h-auto" />
            </div>
            <div className="mt-4 md:w-1/2">
               <h1 className="text-4xl font-bold text-[#66AD76] md:text-6xl">Empowering <span className='text-[#FEFAE1]'>Carbon</span> <span className='text-[#FEFAE1]'>Credit</span> Sustainability </h1>
               <p className="mt-4 text-[#FEFAE1] md:text-md">
                  SustainCred is helping large and complex organizations measure their impact, identify credible levers and reduce at scale, leveraging the power of AI.
               </p>
               <div className="mt-6 flex space-x-4">
                  <a href="#" className="btn-primary">Request a demo</a>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
