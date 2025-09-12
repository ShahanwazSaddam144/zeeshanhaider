import React from 'react';
import Footer from '../component/Footer';

const page = () => {
  return (
    <>
      <section className='mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <div className='bg-slate-600 w-20 mx-auto md:ml-6 mb-5 h-[2px]'></div>
            <h1 className='text-[40px] sm:text-[50px] md:text-[80px] ml-0 md:ml-6 font-bold mb-3 font-playfair'>
              Contact
            </h1>
          </div>
          <div className='mt-6 md:mt-0'>
            <img
              src='/bg-04-free-img.webp'
              alt='About Image'
              className='w-[250px] sm:w-[350px] md:w-[450px] rounded-full mx-auto md:mr-5'
            />
          </div>
        </div>
      </section>

      <section className='mt-20'>
        <div>
          <h1 className='font-playfair font-bold text-[40px] ml-10 mb-1'>Send me a message</h1>
          <p className='ml-10 font-semibold text-gray-600 text-[18px] w-[550px]'>Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page
