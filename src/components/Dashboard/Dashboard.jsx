import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
   const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
         {
            label: 'Carbon Credits',
            data: [120, 140, 160, 180, 200, 220],
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
         },
         {
            label: 'CO2 Reduction',
            data: [60, 70, 80, 90, 100, 110],
            borderColor: 'blue',
            backgroundColor: 'blue',
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

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Carbon Credit Dashboard</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold">Total Carbon Credits</h2>
               <p className="text-3xl font-bold">1,180</p>
               <p className="text-sm text-gray-500">Credits this year</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold">CO2 Reduction</h2>
               <p className="text-3xl font-bold">523</p>
               <p className="text-sm text-gray-500">Tons reduced</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold">Projects</h2>
               <p className="text-3xl font-bold">17</p>
               <p className="text-sm text-gray-500">Funded</p>
            </div>
         </div>
         <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold">Monthly Credits & CO2 Reduction</h2>
            <Line data={data} options={options} />
         </div>
         <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold">Sustainability Goals</h2>
            <div className="mt-2">
               <p className="text-sm">Reforestation</p>
               <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-black h-4 rounded-full" style={{ width: '75%' }}></div>
               </div>
               <p className="text-sm">Renewable Energy</p>
               <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-black h-4 rounded-full" style={{ width: '60%' }}></div>
               </div>
               <p className="text-sm">Waste Reduction</p>
               <div className="bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-black h-4 rounded-full" style={{ width: '40%' }}></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
