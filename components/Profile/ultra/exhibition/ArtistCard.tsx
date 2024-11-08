import React from 'react'

interface ArtistCardProps {
    ArtistName:string,
    Image:string,
  }


export const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  return (
    <div className='border-white-shade-4 border w-full rounded-xl gap-x-5  p-2 flex items-center justify-start'>
          <div className='w-14 h-14  bg-cover bg-center rounded-2xl' style={{ backgroundImage: `url(${props.Image})` }}>                    
              
                 </div>
            <span className='text-black font-medium font-outfit text-base'>{props.ArtistName}</span>
        
    </div>
  )
}
