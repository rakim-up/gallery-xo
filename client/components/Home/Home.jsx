import React from 'react'

// COMPONENT IMPORTS:

import Carousel from './Carousel'
import Hero from './Hero'

const Home = () => {
  return (
    // outermost container
    <main className='bg-slate-500'>
    
      <Carousel />
      <Hero />
    </main>
  )
}

export default Home