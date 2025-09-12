import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="mt-20">
        <div className="max-w-6xl mx-auto px-5 py-10 flex justify-between">
          
          {/* Left Side */}
          <div>
            <p className="font-bold">Based in Global World</p>
            <h1 className="text-6xl md:text-7xl font-extrabold underline mt-5 hover:text-blue-500 cursor-pointer">
              Get in touch
            </h1>
          </div>

          {/* Right Side */}
          <div>
            <p className="font-bold">Social</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-5 text-gray-600 text-sm">
          Copyright © 2025 Zeeshanhaider | Powered by Zeeshanhaider
        </div>
      </section>
    </>
  )
}

export default Footer
