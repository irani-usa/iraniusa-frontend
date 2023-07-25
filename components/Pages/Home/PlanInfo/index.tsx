
import React from 'react'
import Card from './Card'

const PlanInfo = () => {
  return (
    <section className='container'>
      <div className='w-full flex items-center overflow-x-scroll no-scroll gap-x-3 lg:gap-x-6 lg:justify-center'>
        <Card background='/images/home/plan-backgrounds/ultra.png' content={'Business Ultra'} info={'Free and pro accounts'} classes={'bg-[#B80042]'} />
        <Card background='/images/home/plan-backgrounds/artists-events.png' content={'Artists & Events'} info={'Free and pro accounts'} classes={'bg-[#9949FF]'} />
        <Card background={'/images/home/plan-backgrounds/pro.png'} content={'Professional'} info={'Free and pro accounts'} classes={'bg-[#FFA841]'} />
        <Card background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#1F78FF]'} />
      </div>
    </section>
  )
}

export default PlanInfo