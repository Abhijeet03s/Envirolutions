import { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Clock, ThumbsUp, MessageCircle, Mail } from 'lucide-react';

const blogPosts = [
   {
      id: 1,
      title: "The Future of Sustainable Energy: Trends to Watch",
      excerpt: "As we move towards a greener future, several exciting trends are shaping the sustainable energy landscape.From advanced solar technologies to innovative energy storage, this post explores cutting-edge developments set to transform our approach to clean energy.",
      author: "Jane Doe",
      date: "2024-07-15",
      readTime: "5 min read",
      likes: 42,
      comments: 8,
      image: "/blogs-image/blogs-tree-light-bulb.jpg"
   },
   {
      id: 2,
      title: "Corporate Sustainability: More Than Just a Buzzword",
      excerpt: "In today's business world, sustainability is no longer optional. This post delves into how companies are integrating sustainable practices into their core operations, the benefits they're reaping, and why corporate sustainability is crucial for long-term success.",
      author: "John Smith",
      date: "2024-07-10",
      readTime: "8 min read",
      likes: 37,
      comments: 12,
      image: "/blogs-image/blogs-environment-project.jpg"
   },
   {
      id: 3,
      title: "The Role of AI in Environmental Conservation",
      excerpt: "Artificial Intelligence is revolutionizing how we approach environmental challenges. From predictive modeling for climate change to smart wildlife tracking, this post examines the innovative ways AI is being used to protect our planet and its ecosystems.",
      author: "Emily Johnson",
      date: "2024-07-05",
      readTime: "6 min read",
      likes: 28,
      comments: 5,
      image: "/blogs-image/blogs-saving-energy.jpg"
   }
];

// BlogCard component

const BlogCard = ({ post }) => (
   <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
         <h3 className="text-xl font-bold mb-2">{post.title}</h3>
         <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
         <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-500 mb-4">
            <div className="flex items-center">
               <Calendar className="w-4 h-4 mr-1" />
               {post.date}
            </div>
            <div className="flex items-center">
               <Clock className="w-4 h-4 mr-1" />
               {post.readTime}
            </div>
         </div>
         <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                     {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
               </div>
               <span className="text-sm font-medium">{post.author}</span>
            </div>
            <div className="flex space-x-2">
               <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {post.likes}
               </button>
               <button className="flex items-center text-gray-500 hover:text-gray-700">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {post.comments}
               </button>
            </div>
         </div>
      </div>
   </div>
);

BlogCard.propTypes = {
   post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      readTime: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
   }).isRequired,
};

const BlogPage = () => {
   return (
      <div className="bg-[#fefae1]" >
         <div className="container max-w-7xl mx-auto px-6 py-8 md:px-4">
            <header className="text-green-800 text-center mb-8">
               <h1 className="text-4xl font-extrabold mb-2">Our Blogs</h1>
               <p className="font-medium md:text-lg">Explore our latest thoughts on sustainability, green technologies, and environmental conservation.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
               ))}
            </div>
            <NewsletterSection />
         </div>
      </div>
   );
};


// NewsletterSection component

const NewsletterSection = () => {
   const [email, setEmail] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Subscribing email:', email);
      setEmail('');
   };

   return (
      <section className="bg-[#157f3d] py-12 px-4 mt-12 rounded-lg ">
         <div className="max-w-2xl mx-auto text-center text-[#f5f5f5]">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-6">Stay up to date with our latest blog posts and news!</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center sm:flex-row gap-4">
               <div className="flex-grow">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                     </div>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-[#292727] font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                  </div>
               </div>
               <button
                  type="submit"
                  className="inline-flex justify-center items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-[#157f3d] bg-[#e6ffff]"
               >
                  Subscribe
               </button>
            </form>
         </div>
      </section>
   );
};


export default BlogPage;