import React from 'react'

interface ArtistCardProps {
    ArtistName:string,
    Image:string,
  }


export const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  return (
    <div className='bg-white-shade-3 w-full rounded-xl gap-x-5 p-1 flex items-center justify-start'>
          <div className='w-[85px] bg-cover bg-center h-full rounded-2xl' style={{ backgroundImage: `url(${props.Image})` }}>
                    
              
                 </div>
        <div className='flex flex-col items-start gap-y-2 py-3'>
            <span className='text-black font-semibold font-outfit text-lg'>{props.ArtistName}</span>
            <button className='text-white-shade-8 bg-white px-4 rounded-full py-2' type='button'>Invite artist</button>
        </div>
        
    </div>
  )
}
