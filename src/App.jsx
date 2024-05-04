import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Footer />
    </>

  )
}

export default App
