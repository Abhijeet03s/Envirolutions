import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import Dashboard from './components/Dashboard/Dashboard'
import SustainSolutions from "./components/Sustain-Solutions/Sustain"
import ResearchDiscovery from './components/ResearchDiscovery/ResearchDiscovery'
import SustainMart from './components/SustainMart/SustainMart'
import TimeToActNow from './components/TimeToActNow/TimeToActNow'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Hero />
        <Dashboard />
        <SustainSolutions />
        <ResearchDiscovery />
        <SustainMart />
        <TimeToActNow />
        <Footer />
      </div>
    </>
  )
}

export default App
