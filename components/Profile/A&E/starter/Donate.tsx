import React from 'react'


interface DonateProps {
  artist: string,
}


const Donate: React.FC<DonateProps> = (props) =>  {
  return (
    <div className='container py-9 flex flex-col gap-y-9 lg:pl-5 '>
           <h1 className="text-2xl text-black text-center font-outfit font-bold lg:text-3xl">Donating to artist</h1>
        <div className='bg-[#FFC524]/5 bg-contain bg-no-repeat bg-right h-[290px] rounded-3xl p-7 lg:p-15 lg:h-auto' style={{ backgroundImage: `url('/images/profile/A&E/951487566ddaacc684cc319c555b38c9c2bfb6b5.jpg')` }}>
            <h1 className='text-black font-semibold text-xl lg:text-2xl lg:max-w-sm'>You can donate to {props.artist} and support him financially</h1>
            <button type='button' className='bg-[#FFC524] text-black font-medium py-3 
            px-7
             mt-5 rounded-2xl text-lg lg:px-14 lg:mt-7'>Donate</button>
        </div>
    </div>
  )
}

export default Donate