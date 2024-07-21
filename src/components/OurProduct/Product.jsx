import PropTypes from 'prop-types';

const ProductItem = ({ title, items }) => (
   <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
      <h3 className="text-[#65ae76] text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
         {items.map((item, index) => (
            <li key={index} className="border-l-4 border-[#65ae76] pl-4">
               <strong>{item.label}:</strong> {item.value}
            </li>
         ))}
      </ul>
   </div>
);

ProductItem.propTypes = {
   title: PropTypes.string.isRequired,
   items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
   })).isRequired,
};

const ProductCategory = ({ title, products }) => (
   <div className="mb-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{title}</h2>
      {products.map((product, index) => (
         <ProductItem key={index} {...product} />
      ))}
   </div>
);

ProductCategory.propTypes = {
   title: PropTypes.string.isRequired,
   products: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
         label: PropTypes.string.isRequired,
         value: PropTypes.string.isRequired,
      })).isRequired,
   })).isRequired,
};

const OurProducts = () => {
   const productCategories = [
      {
         title: "Carbon Credits",
         products: [
            {
               title: "Verified Carbon Units (VCUs)",
               items: [
                  { label: "Description", value: "Internationally recognized carbon offset credits" },
                  { label: "Projects", value: "Reforestation, renewable energy, methane capture" },
                  { label: "Verification", value: "Validated by Verra (formerly VCS)" },
                  { label: "Pricing", value: "Starting from $10 per tonne of CO2e" }
               ]
            },
            {
               title: "Gold Standard Carbon Credits",
               items: [
                  { label: "Description", value: "Premium carbon credits with additional sustainable development benefits" },
                  { label: "Projects", value: "Clean cookstoves, water purification, sustainable agriculture" },
                  { label: "Verification", value: "Certified by Gold Standard" },
                  { label: "Pricing", value: "Starting from $15 per tonne of CO2e" }
               ]
            }
         ]
      },
   ];

   return (
      <div className="bg-[#fefae1] min-h-screen">
         <div className="container max-w-7xl mx-auto p-6">
            <header className="text-green-800 text-center mb-8">
               <h1 className="text-4xl font-extrabold mb-2">Sustain-Mart: Our Products</h1>
               <p className="font-medium md:text-lg">Empowering Sustainability Through Innovative Solutions</p>
            </header>

            <main>
               <p className="mb-4 text-gray-700 text-sm">
                  At Sustain-Mart, we offer a range of products and services designed to help individuals and businesses reduce their carbon footprint and contribute to a more sustainable future. Explore our key offerings below:
               </p>

               {productCategories.map((category, index) => (
                  <ProductCategory key={index} {...category} />
               ))}
               <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-block px-6 py-3 bg-[#064627] text-[#FEFAE1] font-semibold rounded-lg">
                     Browse All Markets
                  </a>
                  <a href="#" className="inline-block px-6 py-3 bg-[#064627] text-[#FEFAE1] font-semibold rounded-lg">
                     Contact Sales for Custom Solutions
                  </a>
               </div>
            </main>
         </div>
      </div>
   );
};

export default OurProducts;