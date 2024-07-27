import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Dashboard from './components/Dashboard/Dashboard';
import SustainSolutions from "./components/Sustain-Solutions/Sustain";
import ResearchDiscovery from './components/ResearchDiscovery/ResearchDiscovery';
import EnvirolutionsMart from './components/EnvirolutionsMart/EnvirolutionsMart';
import TimeToActNow from './components/TimeToActNow/TimeToActNow';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/About';
import OurProducts from './/components/OurProduct/Product';
import Blogs from './components/Blogs/Blogs';
import ContactUs from './components/Contact/Contact';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Dashboard />
              <SustainSolutions />
              <ResearchDiscovery />
              <EnvirolutionsMart />
              <TimeToActNow />
              <Footer />
            </>
          } />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
