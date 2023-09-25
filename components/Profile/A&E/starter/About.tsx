import React from 'react'

const About = () => {
  return (
   <section className='border-b border-white-shade-4 pb-11'>
      <div className="container mt-7 lg:pl-5">
           <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Who is siavash ghomeyshi?</h1>
           <p className="text-white-shade-9 mt-7 font-opensans lg:text-lg">Siavash Ghomayshi is an Iranian musician, singer and song writer. Siavash studied music in London where he got his master's degree. He left Iran in 1978 and now lives in Los Angeles.</p>
           <div className="mt-8 lg:mt-6">
           <p className="text-lg text-black font-semibold font-opensans">Based in Los angless</p>
           <div className="mt-8 flex flex-col gap-y-5 lg:flex-row lg:gap-x-6">
                 <div className='w-full h-[200px] bg-center bg-cover rounded-2xl lg:w-[65%]' style={{ backgroundImage: `url('/images/profile/A&E/about.png')` }}></div>
                 <div className='w-full h-[200px] bg-center bg-cover rounded-2xl lg:w-[35%]' style={{ backgroundImage: `url('/images/profile/A&E/about2.png` }}></div>
           </div>
           </div>
        </div>
   </section>
  )
}

export default About