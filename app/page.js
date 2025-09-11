import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services'
import Skills from './component/Skills';

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Skills />
    </div>
  )
}

export default page
