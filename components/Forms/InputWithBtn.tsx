
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
    <div className={`${props.classes} flex justify-between items-center gap-x-2 border border-white-shade-4 rounded-xl px-2 w-full lg:w-2/6 h-14`}>
      <Search />
      <input type="text" placeholder={props.placeHolder} className='font-opensans w-7/12 h-full bg-transparent focus:outline-hidden focus:shadow-none text-black' />
      <Button content={props.btnContent} classes={'w-[30%] h-[80%]'}/>
    </div>
  )
}

export default InputWithBtn