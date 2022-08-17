import React from 'react'

// COMPONENT IMPORTS:

import Carousel from './Carousel'
import Hero from './Hero'

const Home = () => {
  return (
    // outermost container
    <>
      <Carousel />
      <Hero />
    </>
  )
}

export default Home