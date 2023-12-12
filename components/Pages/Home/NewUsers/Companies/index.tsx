import React from 'react'
import { CompanyCard } from './CompanyCard'

const Companies = () => {
  return (
    <section>
      <h1 className='text-black text-xl lg:text-2xl font-bold font-outfit'>Companies</h1>
      <section className='no-scroll overflow-x-scroll flex gap-x-6 py-6 lg:grid lg:grid-cols-4'>
        <CompanyCard logo={'/images/home/logo.png'} avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'}  joindate={'Joined 2 weeks ago'} />
        <CompanyCard logo={'/images/home/logo.png'} avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'}  joindate={'Joined 2 weeks ago'} />
        <CompanyCard logo={'/images/home/logo.png'} avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'}  joindate={'Joined 2 weeks ago'} />
        <CompanyCard logo={'/images/home/logo.png'} avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'}  joindate={'Joined 2 weeks ago'} />
      </section>
    </section>
  )
}

export default Companies