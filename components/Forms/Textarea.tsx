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
          <label className='block text-lg font-bold py-3 text-black' htmlFor={props.id}>{props.label}</label>
            
            <textarea className={`${props.classes} w-full text-black px-3 py-3 font-normal rounded-xl bg-white-shade-3 focus:outline-none focus:shadow-none`} rows={4} id={props.id} placeholder={props.placeHolder}>
                
            </textarea>
          </div>
    </>
  )
}

export default Textarea