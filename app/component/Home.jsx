// Home.jsx
import React from "react";
import { Mail, PhoneCall } from "lucide-react";

const Home = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center mt-10 bg-gray-50  bg-gradient-to-r 
      from-transparent 
      via-transparent
      to-cyan-600/90
">

      {/* Left Side - Text */}
      <div className="flex-1 px-10 md:px-20 py-16 z-10">
        <p className="text-gray-600 uppercase tracking-wide text-sm mb-2">
          Hello, my name is
        </p>
        <div className="w-20 h-[2px] bg-slate-600"></div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Syed Zeeshan
        </h1>
        <h2 className="text-[20px] sm:text-[30px] font-semibold text-gray-500 mb-6">
          SAP BI/BW4HANA/DataSphere Consultant
        </h2>

        <div className="flex items-center space-x-3">
          <Mail className="text-blue-500 w-10 h-10" />
          <p
            className="text-gray-900 font-medium text-[22px] hover:text-blue-600 cursor-pointer"
          >
            zeeshanhaider@gmail.com
          </p>
        </div>
        <div className="flex items-center mt-5">
          <PhoneCall className="text-blue-500 w-10 h-10" />
          <p className="ml-2 text-gray-900 font-medium text-[22px]
         hover:text-blue-600 cursor-pointer">966-56-2870409</p>
        </div>
      </div>

      {/* Right Side - Circular Background with Image */}
      <div className="block m-auto">
        <img
          src="/hero-image.webp"
          alt="Syed Zeeshan"
          className="w-[100%] h-[100%] sm:w-[450px] sm:h-[450px] object-cover rounded-full shadow-lg mr-3"
        />
      </div>
    </section>
  );
};

export default Home;
