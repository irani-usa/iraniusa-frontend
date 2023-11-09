
import React from 'react'

interface ButtonProps {
    content:string,
    classes: string,
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.classes} font-opensans  text-white text-lg font-medium rounded-2xl w-full text-center `}>{props.content}</button>
  )
}

export default Button