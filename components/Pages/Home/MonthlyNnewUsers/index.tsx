import React from 'react'
import Star from '../../About/Star'
import { Card } from './Card'

const MonthlyNnewUsers = () => {
  return (
    <section className="container mt-20">
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-x-2">
        <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        <Star content={"Companies Monthly new users"} />
        <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
      </div>
      <p className="text-white-shade-11 mt-4 text-lg">
      New individuals and companies join our platform every month, let’s get to know them!
      </p>
    </div>
    <div className="no-scroll overflow-x-scroll flex gap-6  py-6 lg:grid lg:grid-cols-4">
      <Card avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'} address={'United states,Texas'} link={'test'}/>
      <Card avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'Dentist'} address={'United states,Texas'} link={'test'}/>
      <Card avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'farmer'} address={'United states,Texas'} link={'test'}/>
      <Card avatar={'/images/home/Oldman.png'} title={'Darkcafé'} work={'driver'} address={'United states,Texas'} link={'test'}/>
    </div>
  </section>  )
}

export default MonthlyNnewUsers