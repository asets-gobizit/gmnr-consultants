import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Solution from './components/Solution'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Blog from './components/Blog'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-navy-dark">
      <Navbar />
      <Hero />
      <Pain />
      <Solution />
      <Process />
      <Testimonials />
      <About />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
