

interface ButtonProps {
    content:string,
    classes: string,
    onClick?: () => void;  

}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.classes} w-full font-inter text-white text-xl font-medium rounded-2xl text-center border-2 border-black bg-blue hover:bg-white/0 transition-all duration-300 hover:text-black`}>{props.content}</button>
  )
}

export default Button