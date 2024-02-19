import React from 'react'
import Navbar from './components/landingpage-components/navbar'
import Hero from './components/landingpage-components/hero'
import Features from './components/landingpage-components/features'
import HeartTest from './components/landingpage-components/heartTest'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <HeartTest/>
    </>
  )
}

export default LandingPage