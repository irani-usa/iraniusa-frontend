import React from 'react'
import { PeopleCard } from './PeopleCard'


const People = () => {
  return (
    <section className='mt-5 lg:mt-7'>
    <h1 className='text-black text-xl lg:text-2xl font-bold font-outfit'>People</h1>
    <section className='no-scroll overflow-x-scroll flex gap-6  py-6 lg:grid lg:grid-cols-4'>
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
        <PeopleCard avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Darkcafé'} joindate={'Joined 2 days ago'} />
     
    </section>
  </section>
  )
}

export default People