import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Donations from "./components/Donations"
import Events from "./components/Events"
import About from "./components/About"

const App = () => {
  return (
    <div className="bg-fixed bg-appbg bg-cover">
      <Navbar/>
     <Hero/>
     <About/>
     <Events/>
     <Donations/>
     <Contact/>
    </div>
  )
}

export default App
