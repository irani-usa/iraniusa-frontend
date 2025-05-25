import React from 'react'


interface DonateProps {
  artist: string,
}


const Donate: React.FC<DonateProps> = (props) =>  {
  return (
    <div className='container py-9 flex flex-col gap-y-9 lg:pl-5'>
           <h1 className="text-2xl text-black text-center font-outfit font-bold lg:text-3xl">Donating to artist</h1>
        <div className='w-full bg-cover bg-center h-[290px] rounded-3xl p-7 lg:p-10 lg:h-auto' style={{ backgroundImage: `url('/images/profile/A&E/donate.png')` }}>
            <h1 className='text-white font-semibold text-xl lg:text-2xl lg:max-w-sm'>You can donate to {props.artist} and support him financially</h1>
            <button type='button' className='bg-white text-black font-medium py-4 px-9
             mt-7 rounded-2xl text-lg lg:px-14 lg:mt-10'>Donate</button>
        </div>
    </div>
  )
}

export default Donate