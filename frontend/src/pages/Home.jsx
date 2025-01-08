import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Achievements from '../components/Achievements'
import Properties from '../components/Properties'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main className="mx-auto max-w-[2140px] bg-gradient-to-r from-[#edf1c9] via-white to-white">
      <Hero />
      <Features />
      <Achievements />
      <Properties />
      <About />
      <Testimonials />
    </main>
  )
}

export default Home
