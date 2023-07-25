import OverlayMenu from '@/components/Layout/OverlayMenu'
import PopularSeminar from '@/components/Pages/Events/PopularSeminar'
import React from 'react'

const page = () => {
  return (
    <>
    <OverlayMenu />
    <section className='container py-10'>
        <div>
            <h1 className='text-black text-lg font-semibold'>Popular seminars</h1>
            <PopularSeminar content={'How to start from scratch'} people={'70-100'} organizer={'Mohammad ghaem'} date={'11/7/16'} city={'Washington DC'} />
        </div>
    </section>
    </>
  )
}

export default page