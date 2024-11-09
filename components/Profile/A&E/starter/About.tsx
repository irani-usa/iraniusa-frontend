import React from 'react'


interface AboutProps {
  about: string,
  artist:string,
  city:string,
}


const About: React.FC<AboutProps> = (props) =>  {
  return (
   <section className='border-b border-white-shade-4 pb-11'>
      <div className=" mt-7 lg:pl-5">
           <h1 className="text-2xl text-black font-outfit font-bold lg:text-3xl">Who is {props.artist}?</h1>
           <p className="text-white-shade-9 mt-7 font-opensans lg:text-lg">{props.about}</p>
           <div className="mt-8 lg:mt-6">
           <p className="text-lg text-black font-semibold font-opensans">Based in {props.city}</p>
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