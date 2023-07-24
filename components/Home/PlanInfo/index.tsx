
import React from 'react'
import Card from './Card'

const PlanInfo = () => {
  return (
   <section className='container'>
    <div className='w-full flex items-center overflow-x-scroll no-scroll gap-x-5'>
    <Card content={'Business Ultra'} info={'Free and pro accounts'} classes={'bg-[#B80042]'} />
     <Card content={'Artists & Events'} info={'Free and pro accounts'} classes={'bg-[#9949FF]'} />
     <Card content={'Professional'} info={'Free and pro accounts'} classes={'bg-[#FFA841]'}/>
     <Card content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#1F78FF]'}/>
    </div>
   </section>
  )
}

export default PlanInfo