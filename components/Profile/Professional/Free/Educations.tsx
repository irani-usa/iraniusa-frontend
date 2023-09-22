
import React from 'react'

const Educations = () => {
  return (
    <section className='w-full border-white-shade-4 border-b py-8'>
      <div className='container flex flex-col gap-y-6'>
        <h1 className="text-[26px] font-outfit font-bold text-black">Educations</h1>
        <p className=" text-white-shade-9  font-opensans">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    <div className='grid grid-cols-2 items-center '>
    <div className='flex flex-col w-full'>
          <h1 className="text-lg font-medium text-black">Product designer</h1>
          <span className="text-white-shade-9 font-medium">RMIT University</span>
          <span className="text-white-shade-9 font-medium">2021</span>
        </div>
        <div className='flex flex-col w-full'>
          <h1 className="text-lg font-medium text-black">Product designer</h1>
          <span className="text-white-shade-9 font-medium">RMIT University</span>
          <span className="text-white-shade-9 font-medium">2021</span>
        </div>
    </div>
      </div>
    </section>
  )
}

export default Educations