

interface ButtonProps {
    content:string,
    classes: string,
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={`${props.classes} font-opensans text-white   text-lg font-medium rounded-2xl w-full text-center border-2 border-black bg-blue hover:bg-white/0 transition-all duration-300 hover:text-black`}>{props.content}</button>
  )
}

export default Button