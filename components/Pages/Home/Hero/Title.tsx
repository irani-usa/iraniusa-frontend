
import React from 'react'
import Separator from '../../../Separator'

const Title = () => {
  return (
    <div className='flex flex-col items-center'>
      <Separator classes="my-10 lg:mt-16" />
      <h1 className='text-xl lg:text-3xl leading-8 text-black font-semibold font-outfit text-center'>
        find your best choice among
        <br />
        thousand of awesome sevices
      </h1>
    </div>
  )
}

export default Title