import { MoveRight } from 'lucide-react';
import Footer from '../component/Footer';
import React from 'react'

const About = () => {
  return (
    <>
      <section className='mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <div className='bg-slate-600 w-20 mx-auto md:ml-6 mb-5 h-[2px]'></div>
            <h1 className='text-[40px] sm:text-[50px] md:text-[60px] ml-0 md:ml-6 font-bold mb-3 font-playfair'>
              About
            </h1>
          </div>
          <div className='mt-6 md:mt-0'>
            <img
              src='/bg-06-free-img.webp'
              alt='About Image'
              className='w-[250px] sm:w-[350px] md:w-[450px] rounded-full mx-auto md:mr-5'
            />
          </div>
        </div>
      </section>

      {/* About Desc */}
      <section className='mt-20 px-4 sm:px-8'>
        <div className='text-center'>
          <h1 className='text-sky-500 font-bold text-[18px] sm:text-[20px]'>About me</h1>
          <p className='mt-3 font-playfair font-bold text-[20px] sm:text-[30px] md:text-[40px] leading-snug'>
            I am an enthusiastic web developer based in New York, with a rich experience of over 6
            years in website & product design.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className='mt-20 px-4 sm:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
          <h1 className='font-playfair font-bold text-sky-600 text-[28px] sm:text-[32px] md:text-[35px] text-center md:text-left md:w-1/2'>
            Award-winning web design & development professional
          </h1>
          <div className='md:w-1/2 text-justify space-y-4'>
            <p className='font-semibold text-[16px] sm:text-[18px]'>
              With years of experience in graphic and web design I have mastered the skills of
              understanding client requirements according to the latest trends. I have worked with
              businesses from different niches so you can rely on me for yours.
            </p>
            <p className='text-[15px] sm:text-[16px] text-gray-700'>
              I’ve spent most of these years working across different areas of design like front-end
              development, landing pages, email design, app UI/UX, to my current role designing
              products for mobile platforms. Having worked on various projects that are already live,
              I can help you with the best possible suggestions and ideas that we can proceed with.
              With me, you aren’t forced to accept anything. I give you a variety of options we can
              work on together.
            </p>
          </div>
        </div>
      </section>

{/* Skills */}
<section className="mt-20 mb-5">
  <div className="flex flex-col md:flex-row justify-between items-center gap-10">
    
    {/* Left Side - Text */}
    <div className="md:w-1/2 px-6 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">My Skills</h1>
      <p className="text-lg leading-relaxed text-gray-700">
        I believe in the fact that learning never stops and I am interested in learning 
        new technologies and programming languages that will help me design and develop 
        a better output in less time.
      </p>
    </div>

    {/* Right Side - Skills */}
    <div className="md:w-1/2 bg-sky-500 p-8 rounded-lg shadow-lg text-white w-full">
      {/* JavaScript */}
      <div className="mb-6">
        <p className="mb-2 font-semibold">JavaScript</p>
        <div className="w-full bg-sky-700 rounded-full h-3">
          <div className="bg-white h-3 rounded-full text-right pr-2 text-xs text-gray-800 font-bold"  style={{width: "97%"}}>
            97%
          </div>
        </div>
      </div>

      {/* PHP */}
      <div className="mb-6">
        <p className="mb-2 font-semibold">PHP</p>
        <div className="w-full bg-sky-700 rounded-full h-3">
          <div className="bg-white h-3 rounded-full text-right pr-2 text-xs text-gray-800 font-bold"  style={{width: "87%"}}>
            87%
          </div>
        </div>
      </div>

      {/* Python */}
      <div className="mb-6">
        <p className="mb-2 font-semibold">Python</p>
        <div className="w-full bg-sky-700 rounded-full h-3">
          <div className="bg-white h-3 rounded-full text-right pr-2 text-xs text-gray-800 font-bold"  style={{width: "90%"}}>
            90%
          </div>
        </div>
      </div>

      {/* Photoshop */}
      <div className="mb-6">
        <p className="mb-2 font-semibold">Photoshop</p>
        <div className="w-full bg-sky-700 rounded-full h-3">
          <div className="bg-white h-3 rounded-full text-right pr-2 text-xs text-gray-800 font-bold" style={{width: "85%"}}>
            85%
          </div>
        </div>
      </div>

      {/* Illustrator */}
      <div>
        <p className="mb-2 font-semibold">Illustrator</p>
        <div className="w-full bg-sky-700 rounded-full h-3">
          <div className="bg-white h-3 rounded-full text-right pr-2 text-xs text-gray-800 font-bold"  style={{width: "75%"}}>
            75%
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Experience */}
<section className="mt-20 mb-4">
  <div>
    <h1 className="font-playfair font-bold text-[45px] ml-5">Experience</h1>
  </div>

  {/* Timeline Container */}
  <div className="mt-10 space-y-10">

    {/* Experience 1 */}
    <div className="flex justify-center items-center gap-10">
      <div className="text-right min-w-[150px]">
        <h1 className="font-bold">2015-2021</h1>
        <p className="text-[20px] text-gray-600 font-semibold">ACME Company</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-sky-600">LEAD UI/UX DESIGNER</h2>
        <p className="text-gray-700 mt-2 max-w-3xl">
          I have responsibly led a team of 12 designers to help, supervise and approve their designs to make sure it matches client expectations and latest design standards.
        </p>
      </div>
    </div>

    {/* Experience 2 */}
    <div className="flex justify-center items-center gap-10">
      <div className="text-right min-w-[150px]">
        <h1 className="font-bold">2011-2015</h1>
        <p className="text-[20px] text-gray-600 font-semibold">Dynamic Capital INC</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-sky-600">WEB DEVELOPER</h2>
        <p className="text-gray-700 mt-2 max-w-3xl">
          I was responsible for all the in-house and client-based web development assignments. I take pride in having helped the best of clients and getting maximum ratings for the company.
        </p>
      </div>
    </div>

    {/* Experience 3 */}
    <div className="flex justify-center items-center gap-10">
      <div className="text-right min-w-[150px]">
        <h1 className="font-bold">2003-2011</h1>
        <p className="text-[20px] text-gray-600 font-semibold">Dynamic Capital INC</p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-sky-600">UI/UX DESIGNER</h2>
        <p className="text-gray-700 mt-2 max-w-3xl">
          I was a part of an amazing design team and worked together with them to help design and develop apps and websites for different clients of the company.
        </p>
      </div>
    </div>

  </div>
</section>

{/* Servcies */}
<section className='mt-20'>
  <div className='flex justify-between items-center'>
    <h1 className='text-[45px] font-playfair font-extrabold ml-5'>Services</h1>
    <MoveRight size={80} className='text-blue-500 mr-5' />
  </div>
</section>

{/* Footer */}
<Footer />
    </>
  )
}

export default About;
