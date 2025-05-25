import React from 'react'
interface TextareaProps {
    id: string,
    placeHolder: string,
    classes: string,
    label: string,
}


const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <>
          <div>
          <label className='block text-lg font-semibold py-3 text-blue' htmlFor={props.id}>{props.label}</label>
            
            <textarea className={`${props.classes} w-full h-44 text-white-shade-15 px-3 py-3 font-medium font-inter rounded-xl bg-transparent border border-white-shade-4 focus:outline-hidden focus:shadow-none`} rows={4} id={props.id} placeholder={props.placeHolder}>
                
            </textarea>
          </div>
    </>
  )
}

export default Textarea