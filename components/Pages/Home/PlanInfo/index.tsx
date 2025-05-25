
import Card from '@/components/Pages/Home/PlanInfo/Card'
import React from 'react'


const PlanInfo = () => {
  return (
    <section className='container mt-20'>
      <div className='flex  lg:grid grid-cols-4 items-center overflow-x-scroll no-scroll gap-x-3 lg:gap-x-4'>
        <Card background='/images/home/plan-backgrounds/ultra.png' content={'Business Ultra'} info={'Free and pro accounts'} classes={'bg-[#B80042]'} OldPrice={99} NewPrice={89} off={29}/>
        <Card background='/images/home/plan-backgrounds/artists-events.png' content={'Artists & Events'} info={'Free and pro accounts'} classes={'bg-[#FFA841]'} OldPrice={99} NewPrice={89} off={29} />
        <Card background={'/images/home/plan-backgrounds/pro.png'} content={'Professional'} info={'Free and pro accounts'} classes={'bg-[#9949FF'} OldPrice={99} NewPrice={89} off={29}/>
        <Card background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#9949FF]'} OldPrice={99} NewPrice={89} off={29}/>
      </div>
    </section>
  )
}

export default PlanInfo