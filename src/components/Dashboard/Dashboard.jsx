import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
   datasets: [
      {
         label: 'Carbon Credits',
         data: [120, 140, 160, 180, 200, 220],
         borderColor: '#10b981', // Tailwind green-500
         backgroundColor: 'rgba(16, 185, 129, 0.5)', // Tailwind green-500
         fill: false,
      },
      {
         label: 'CO2 Reduction',
         data: [60, 70, 80, 90, 100, 110],
         borderColor: '#3b82f6', // Tailwind blue-500
         backgroundColor: 'rgba(59, 130, 246, 0.5)', // Tailwind blue-500
         fill: false,
      },
   ],
};

const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top',
      },
   },
   scales: {
      y: {
         beginAtZero: true,
      },
   },
};

const Dashboard = () => {
   return (
      <div className="container mx-auto max-w-7xl px-8 py-16 md:py-32 md:px-0">
         <h1 className="font-inter text-4xl md:text-5xl font-bold mb-12 text-[#1E1E1E] text-center">Carbon Credit Dashboard</h1>
         <div className="dashboard-content grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="left-content space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card bg-white p-4 rounded-lg shadow-md">
                     <h2 className="text-md font-semibold">Total Carbon Credits</h2>
                     <p className="text-3xl font-bold text-green-500">1,180</p>
                     <p className="text-sm text-gray-500">Credits this year</p>
                  </div>
                  <div className="card bg-white p-4 rounded-lg shadow-md">
                     <h2 className="text-md font-semibold">CO2 Reduction</h2>
                     <p className="text-3xl font-bold text-blue-500">523</p>
                     <p className="text-sm text-gray-500">Tons reduced</p>
                  </div>
                  <div className="card bg-white p-4 rounded-lg shadow-md">
                     <h2 className="text-md font-semibold">Projects</h2>
                     <p className="text-3xl font-bold text-yellow-500">17</p>
                     <p className="text-sm text-gray-500">Funded</p>
                  </div>
               </div>
               <div className="sustainability bg-white p-4 rounded-lg shadow-md">
                  <h2 className="md:text-xl font-bold text-[#1E1E1E]">Sustainability Goals</h2>
                  <div className="mt-2">
                     <div className="goal">
                        <p className="text-sm">Reforestation</p>
                        <div className="progress-bar bg-gray-200 rounded-full h-3 mb-4">
                           <div className="progress bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm text-right text-green-500 mt-[-0.7rem]">75% complete</p>
                     </div>
                     <div className="goal">
                        <p className="text-sm">Renewable Energy</p>
                        <div className="progress-bar bg-gray-200 rounded-full h-3 mb-4">
                           <div className="progress bg-blue-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <p className="text-sm text-right text-blue-500 mt-[-0.7rem]">60% complete</p>
                     </div>
                     <div className="goal">
                        <p className="text-sm">Waste Reduction</p>
                        <div className="progress-bar bg-gray-200 rounded-full h-3 mb-4">
                           <div className="progress bg-yellow-500 h-3 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <p className="text-sm text-right text-yellow-500 mt-[-0.7rem]">40% complete</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className=" bg-white pl-4 rounded-lg shadow-md">
               <h2 className="md:text-xl font-bold pb-4">Monthly Credits & CO2 Reduction</h2>
               <Line data={data} options={options} />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;
