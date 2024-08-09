import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import Joblistings from '../components/JobListings'
import Alljobs from '../components/Alljobs'
const Homepage = () => {
  return (
    <>
    <Hero/>
    <Homecard/>
    <Joblistings isHome = {true}/>
    <Alljobs/>
    </>
  )
}

export default Homepage