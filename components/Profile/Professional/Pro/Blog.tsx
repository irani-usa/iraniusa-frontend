import BlogCardM from '@/components/Pages/Blog/BlogCardM'
import React from 'react'

const Blog = () => {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
    <div className='container flex flex-col gap-y-6 mt-8 lg:px-0'>
    <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl">My Blog</h1>
          <p className="text-center text-lg text-white-shade-9  font-opensans">is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
     
         <BlogCardM classes={'lg:w-[43%]'} />
    
          
          <section className="flex justify-center gap-x-3 mt-7 pb-3 lg:hidden">
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
    </div>
  </div>
  )
}

export default Blog