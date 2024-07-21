import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactUsPage = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      query: ''
   });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
      if (!formData.query.trim()) newErrors.query = 'Query is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         // handle the form submission
         console.log('Form submitted:', formData);
         // reset form 
         setFormData({ name: '', email: '', subject: '', query: '' });
      }
   };

   return (
      <div className="min-h-screen bg-[#fefae1] py-12 px-6 md:px-4 lg:px-8">
         <div className="max-w-xl mx-auto">
            <div className="text-center mb-6">
               <h1 className="font-inter text-4xl font-extrabold text-green-800 mb-2">Contact Us</h1>
            </div>

            <div className="bg-[#fefcfc] shadow-xl rounded-lg overflow-hidden">
               <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold text-green-700 mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                           placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                     </div>
                     <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                           placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                     </div>
                     <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input
                           type="text"
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={handleChange}
                           className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                           placeholder="How can we help?"
                        />
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                     </div>
                     <div className="mb-6">
                        <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">Your Query</label>
                        <textarea
                           id="query"
                           name="query"
                           value={formData.query}
                           onChange={handleChange}
                           rows="4"
                           className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.query ? 'border-red-500' : 'border-gray-300'}`}
                           placeholder="Your query here..."
                        ></textarea>
                        {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
                     </div>
                     <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
                     >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUsPage;