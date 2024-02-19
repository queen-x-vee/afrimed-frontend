import React from 'react'
import Navbar from './components/landingpage-components/navbar'
import Hero from './components/landingpage-components/hero'
import Features from './components/landingpage-components/features'
import HeartTest from './components/landingpage-components/heartTest'
import Medic from './components/landingpage-components/aimedic'
import Footer from './components/landingpage-components/footer'
import SeamlessJourney from './components/landingpage-components/seamlessJourney'
import Testimonials from './components/landingpage-components/testimonials'

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Features/>
    <SeamlessJourney/>
    <HeartTest/>
    <Medic/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default LandingPage