import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services'
import Footer from './component/Footer';

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default page
