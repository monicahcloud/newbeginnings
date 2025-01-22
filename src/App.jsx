import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Donations from "./components/Donations"

const App = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <Donations/>
     <Contact/>
    </div>
  )
}

export default App
