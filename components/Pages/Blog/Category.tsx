import React from 'react'

interface CategoryProps {
    classes: string,
    content:string,
  }

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <>
    <div className='py-5 border-b-[1.5px] border-white-shade-4'>
        <span className='text-white-shade-9 flex items-center justify-between font-opensans'>{props.content} <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967L23.5303 14.4697C23.8232 14.7626 23.8232 15.2374 23.5303 15.5303L17.5303 21.5303C17.2374 21.8232 16.7626 21.8232 16.4697 21.5303C16.1768 21.2374 16.1768 20.7626 16.4697 20.4697L21.1893 15.75H7C6.58579 15.75 6.25 15.4142 6.25 15C6.25 14.5858 6.58579 14.25 7 14.25H21.1893L16.4697 9.53033C16.1768 9.23744 16.1768 8.76256 16.4697 8.46967Z" fill="#011223"/>
</svg>
</span>
    </div>
    </>
  )
}

export default Category