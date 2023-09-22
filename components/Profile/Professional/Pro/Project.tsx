import React from 'react'

const Project = () => {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
    <div className='container flex flex-col gap-y-6 mt-8 lg:px-0'>
    <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl">projects Completed</h1>
          <section className='lg:flex items-center gap-x-32'>
          <div className='flex flex-col gap-y-4 mt-5 '>
          <h1 className='text-black font-medium text-xl '>Upsket (device management)</h1>
          <div className='flex items-center gap-x-2'>
            <div className='p-2 bg-white-shade-3'><div className='bg-blue w-3 h-3'></div></div>
            <span className='text-white-shade-9'>UI/UX design</span>
          </div>
          <div className='bg-cover bg-center w-full h-[240px] rounded-2xl mt-3 lg:w-[140%]' style={{ backgroundImage: `url('/images/profile/Project.png')` }}>

          </div>
         
          </div>
          <div className='lg:flex flex-col gap-y-4 mt-5 hidden'>
          <h1 className='text-black font-medium text-xl '>Upsket (device management)</h1>
          <div className='flex items-center gap-x-2'>
            <div className='p-2 bg-white-shade-3'><div className='bg-blue w-3 h-3'></div></div>
            <span className='text-white-shade-9'>UI/UX design</span>
          </div>
          <div className='bg-cover bg-center w-full h-[240px] rounded-2xl mt-3 lg:w-[140%]' style={{ backgroundImage: `url('/images/profile/Project.png')` }}>

          </div>
         
          </div>
          </section>
          <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
          
          <h1 className="text-[26px] font-outfit font-bold mt-9 text-black lg:text-3xl">Soft skills and languages</h1>
          <p className=" text-white-shade-9  font-opensans">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <ul className='list-disc text-black grid grid-cols-1 ml-5 text-lg font-medium gap-y-4 lg:grid-cols-3 lg:grid-rows-5'>
                <li>Stress managemnet</li>
                <li>Speech in public</li>
                <li>Creativity, Responsible</li>
                <li>Team player</li>
                <li>Problem solving</li>
                <li>Stress managemnet</li>
                <li>Speech in public</li>
                <li>Creativity, Responsible</li>
                <li>Team player</li>
                <li>Problem solving</li>
                <li>German</li>
                <li>Persian</li>
                <li>English</li>
                <li>Spanish</li>
            </ul>
    </div>
  </div>
  )
}

export default Project