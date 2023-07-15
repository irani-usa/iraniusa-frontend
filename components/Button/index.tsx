import React from 'react'
interface ButtonProps {
    content:string,
    classes: string,
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.classes} font-opensans bg-blue text-lg font-medium rounded-2xl w-full text-center py-6`}>{props.content}</button>
  )
}

export default Button