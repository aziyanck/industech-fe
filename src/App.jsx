import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Feature from './components/Feature'
import Services from './components/Services'
import Brands from './components/Brands'
import WhyIta from './components/WhyIta'
import Contact from './components/Contact'





function App() {

  useEffect(()=>{
    AOS.init({
      once:true,
      duration:1000})
  },[])

  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Home />
      <Services />
      <Feature />
      <Brands />
      <WhyIta />
      <Contact />

    </div>
    
  )
}

export default App
