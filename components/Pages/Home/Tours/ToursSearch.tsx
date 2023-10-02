
import React from 'react'

import ToursCard from './ToursCard'

const ToursSearch = () => {
  return (
    <section className='container my-36'>
      {/* <TitleWithStar title={'Tickets and tours'} summery={'Be aware of Weekly events and concerts from all around the usa'} /> */}
      <div className='w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-10 gap-y-12 my-8'>
        <ToursCard image={''} title={'The Geo-Archaeo Face of USA'} summery={'The Most Spectacular Geological and Archaeological Sites of Iran Gate of Nations is'} price={'67$'} score={4.2} location={'San Francisco'} duration={'11 days'} />
        <ToursCard image={''} title={'Damavand Volcano 5671 meter'} summery={'The Most Spectacular Geological and Archaeological Sites of Iran Gate of Nations is'} price={'11$'} score={5.0} location={'Washington DC'} duration={'2 days'} />
        <ToursCard image={''} title={'Diving in Persian Gulf'} summery={'The Most Spectacular Geological and Archaeological Sites of Iran Gate of Nations is'} price={'110$'} score={4.8} location={'Tehran'} duration={'6 days'} />
      </div>
    </section>
  )
}

export default ToursSearch