import PropTypes from 'prop-types';

const solutions = [
   {
      title: 'Greenhouse Gases Protocol',
      description: 'We use this globally recognized standard to quantify emissions across Scope 1 (direct), Scope 2 (indirect energy), and Scope 3 (value chain) categories.'
   },
   {
      title: 'Life Cycle Assessment (LCA)',
      description: 'Our team conducts comprehensive analyses of products carbon footprints from raw material extraction to disposal.'
   },
   {
      title: 'Carbon Footprint Calculators',
      description: 'We develop customized tools that enable real-time tracking of your organization carbon emissions.'
   },
   {
      title: 'Input-Output Analysis',
      description: 'We leverage economic data to estimate emissions associated with supply chains and indirect activities.'
   }
];

// SolutionCard
const SolutionCard = ({ title, description }) => {
   return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 hover:bg-[#65ae76] hover:text-[#FEFAE1] group">
         <h3 className="text-xl font-semibold text-[#343330] mb-3 group-hover:text-[#FEFAE1]">{title}</h3>
         <p className="text-[#757575] text-sm group-hover:text-[#FEFAE1]">{description}</p>
      </div>
   );
};

SolutionCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};


const SustainSolutions = () => {
   return (
      <section className="bg-[#FEFAE1] py-16 px-8 md:py-32 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <h2 className="font-inter text-4xl md:text-5xl font-bold mb-4 text-center text-[#1E1E1E]">Sustain Solutions: <span >Carbon Accounting Methods</span></h2>
            <p className="text-md text-[#343330] mb-12 text-center max-w-3xl mx-auto">
               At Sustain Solutions, we employ cutting-edge carbon accounting methods to
               help businesses measure and reduce their environmental impact
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {solutions.map((solution, index) => (
                  <SolutionCard key={index} title={solution.title} description={solution.description} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default SustainSolutions;