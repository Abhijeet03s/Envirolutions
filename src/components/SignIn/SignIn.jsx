import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';

const SignInPage = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [errors, setErrors] = useState({});

   const validateForm = () => {
      const newErrors = {};
      if (!email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
      if (!password) newErrors.password = 'Password is required';
      else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         console.log('Sign in with', email, password);
      }
   };

   return (
      <div className="min-h-screen bg-[#fefae1] flex items-center justify-center px-8 md:p-4">
         <div className="max-w-md w-full bg-[#f5f5f5] rounded-lg shadow-xl overflow-hidden">
            <div className="bg-green-700 px-6 py-8 text-white text-center">
               <h1 className="text-3xl font-bold mb-2">Welcome to Sustain-Mart</h1>
               <p>Sign in to access your sustainable future</p>
            </div>
            <form onSubmit={handleSubmit} className="px-6 py-8">
               <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                     Email Address
                  </label>
                  <input
                     type="email"
                     id="email"
                     className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                     placeholder="you@example.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                     Password
                  </label>
                  <div className="relative">
                     <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                     </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
               </div>
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                     <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                     />
                     <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                        Remember me
                     </label>
                  </div>
                  <a href="#" className="text-sm text-green-600 hover:text-green-800">
                     Forgot password?
                  </a>
               </div>
               <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
               >
                  <LogIn className="h-5 w-5 mr-2" />
                  Sign In
               </button>
            </form>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
               <p className="text-center text-sm text-gray-600">
                  Dont have an account?{' '}
                  <a href="#" className="text-green-600 hover:text-green-800 font-medium">
                     Sign up
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default SignInPage;