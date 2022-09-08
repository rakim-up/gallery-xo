import React from 'react'

// COMPONENT IMPORTS:

import Carousel from './Carousel'
import Hero from './Hero'

const Home = () => {
  return (
    // outermost container
    <main >
      <Carousel />
      <Hero />
    </main>
  )
}

export default Home