import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Donations from "./components/Donations"
import Events from "./components/Events"

const App = () => {
  return (
    <div className="bg-fixed bg-appbg bg-cover">
      <Navbar/>
     <Hero/>
     <Events/>
     <Donations/>
     <Contact/>
    </div>
  )
}

export default App
