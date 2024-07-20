import PropTypes from 'prop-types';

export const SolutionCard = ({ title, description }) => {
   return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 hover:bg-[#65ae76] hover:border-[#65ae76] hover:text-[#FEFAE1] group">
         <h3 className="text-xl font-semibold text-[#343330] mb-3 group-hover:text-[#FEFAE1]">{title}</h3>
         <p className="text-[#757575] text-sm group-hover:text-[#FEFAE1]">{description}</p>
      </div>
   );
};


SolutionCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
};