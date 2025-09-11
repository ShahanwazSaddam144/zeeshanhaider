import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services'
import Footer from './component/Footer';
import Skills from './component/Skills';
import Achievements from './component/Achievements'

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  )
}

export default page
