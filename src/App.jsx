import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChallengeSection from './components/ChallengeSection'
import Modules from './components/Modules'
import InteractiveDemo from './components/InteractiveDemo'
import WhyUniPilot from './components/WhyUniPilot'
import Performance from './components/Performance'
import Benefits from './components/Benefits'
import MobileSection from './components/MobileSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <ChallengeSection />
        <Modules />
        <InteractiveDemo />
        <WhyUniPilot />
        <Performance />
        <Benefits />
        <MobileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
