import React from 'react'
import Footer from '../component/Footer'

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <div className="bg-slate-600 w-20 mx-auto md:ml-6 mb-5 h-[2px]"></div>
            <h1 className="text-[36px] sm:text-[50px] md:text-[80px] ml-0 md:ml-6 font-bold mb-3 font-playfair">
              Contact
            </h1>
          </div>
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">
            <img
              src="/bg-04-free-img.webp"
              alt="Contact Image"
              className="w-[200px] sm:w-[300px] md:w-[450px] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="mt-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 className="font-playfair font-bold text-[32px] sm:text-[40px] md:text-[48px] mb-4">
            Send me a message
          </h1>
          <p className="font-semibold text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Whether you wish to discuss new ideas or have a project for me, simply fill this form
            and I’ll get back to you soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Page
