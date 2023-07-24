
import React from 'react'

import { Search } from '../Icons/Outline'
import Button from './Button'

interface ButtonProps {
  placeHolder: string,
  classes: string,
  btnContent: string
}

const InputWithBtn: React.FC<ButtonProps> = (props) => {
  return (
    <div className={`${props.classes} flex justify-between items-center gap-x-2 bg-white-shade-3 rounded-xl pl-5 w-full lg:w-2/6 h-20`}>
      <Search />
      <input type="text" placeholder={props.placeHolder} className='font-opensans w-7/12 h-full bg-white-shade-3 focus:outline-none focus:shadow-none text-black' />
      <Button content={props.btnContent} classes={'w-3/12 h-[90%]'} />
    </div>
  )
}

export default InputWithBtn