
import React from 'react'

import TitleWithStar from '../TitleWithStar'
import ToursCard from '../Tours/ToursCard'

const ToursSearch = () => {
  return (
    <section className='container my-36'>
      {/* <TitleWithStar title={'Tickets and tours'} summery={'Be aware of Weekly events and concerts from all around the usa'} /> */}
      <div className='w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-10 gap-y-12 my-8'>
        <ToursCard />
        <ToursCard />
        <ToursCard />
      </div>
    </section>
  )
}

export default ToursSearch