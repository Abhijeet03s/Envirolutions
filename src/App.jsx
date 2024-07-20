import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import SustainSolutions from "./components/Sustain-Solutions/Sustain"
import ResearchDiscovery from './components/ResearchDiscovery/ResearchDiscovery'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar />
        <Hero />
        <SustainSolutions />
        <ResearchDiscovery />
      </div>
    </>
  )
}

export default App
