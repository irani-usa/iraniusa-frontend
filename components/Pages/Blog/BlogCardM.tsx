import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BlogCardMProps {
    classes: string,
  }
  
const BlogCardM: React.FC<BlogCardMProps> = (props) => {
  return (
    <>
    <Link href={"#"}>
    <div className={`${props.classes} rounded-2xl border-[1.5px] border-white-shade-3 hover:shadow-card transition-all duration-300`}>
    <Image className='w-full rounded-t-2xl' src={'/images/blog/UsaFlag.webp'} width={300} height={300} alt={''} />
       <div className='flex flex-col gap-y-4'>
       <h1 className='px-6 pt-6  text-black text-xl font-outfit font-semibold'>Exploring Shirez Canyon in the Heart of Zagros Mountains</h1>
       <p className='px-6  font-opensans text-white-shade-10 font-medium'>Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains...</p>
       <hr className='h-[1.5px] bg-white-shade-4 w-full' />
       <div className='px-6 pb-6 flex items-center justify-between'>
       <div className='flex items-center gap-x-3'>
                                <img className='w-10' src="/images/blog/User.webp" alt="" />
                                <h1 className='text-black font-semibold font-opensans flex flex-col items-start'>
                                    Anna Rosé
                                    <span className='font-opensans text-sm text-white-shade-9 font-normal'>Posted just now</span>
                                </h1>
                            </div>
                            <span className='w-[105px] h-8 flex items-center justify-center bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg'>3 min read</span>
       </div>
       </div>
    </div>
    </Link>
    </>
  )
}

export default BlogCardM