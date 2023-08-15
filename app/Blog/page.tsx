
import React from 'react'

import SmallBanner from '@/components/AdsBanner/SmallBanner'
import OverlayMenu from '@/components/Layout/OverlayMenu'
import BlogCard from '@/components/Pages/Blog/BlogCard'
import BlogCardM from '@/components/Pages/Blog/BlogCardM'
import Bloggers from '@/components/Pages/Blog/Bloggers'
import Category from '@/components/Pages/Blog/Category'
import LawyarsCard from '@/components/Pages/Blog/LawyarsCard'
import PopularUser from '@/components/Pages/Blog/PopulerUser'
import Tag from '@/components/Pages/Blog/Tag'
import Separator from '@/components/Separator'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <OverlayMenu />
            <section>
                <div className='container py-10 flex flex-col items-center gap-y-5 bg-white-shade-2'>
                    <Separator classes={''} />
                    <div className='py-10 w-full bg-white-shade-6 rounded-xl '></div>
                </div>
                <div className='container flex flex-col gap-y-6 py-14'>
                    <h1 className='text-black text-xl font-semibold font-outfit'>Most popular users/companies</h1>
                    <div className='no-scroll flex items-center gap-x-5 w-full overflow-x-scroll'>
                        <PopularUser />
                        <PopularUser />
                        <PopularUser />
                        <PopularUser />
                    </div>
                </div>
                <div className='container py-7 flex flex-col items-center gap-y-12'>
                    <div className='lg:flex items-center gap-x-5'>
                        <BlogCard classes={'lg:flex'} />
                        <BlogCard classes={'hidden lg:flex'} />
                    </div>
                    <div className='w-4/5 h-1 rounded-xl bg-white-shade-3 flex justify-center lg:w-3/12'>
                        <div className='w-16 bg-black h-full rounded-xl'></div>
                    </div>
                </div>
                <div className='lg:flex container lg:items-start gap-x-2'>
                    <section className='pr-5 '>
                        <div className='flex flex-col gap-y-6 py-14'>
                            <h1 className='text-black text-xl font-semibold font-outfit'>Lawyars pick</h1>
                            <div className='flex flex-col gap-y-6 lg:flex-row gap-x-6'>
                                <LawyarsCard />
                                <LawyarsCard />
                            </div>
                        </div>
                        <div>
                            <div className='lg:flex items-center gap-x-6'>
                                <BlogCardM classes={''} />
                                <BlogCardM classes={'hidden lg:block'} />
                            </div>
                            <div className='hidden  lg:flex flex-col gap-y-6 py-14'>
                            <h1 className='text-black text-xl font-semibold font-outfit'>Lawyars pick</h1>
                            <div className='flex flex-col gap-y-6 lg:flex-row gap-x-6'>
                                <LawyarsCard />
                                <LawyarsCard />
                            </div>
                        </div>
                        <div className='hidden lg:flex items-center gap-x-6'>
                                <BlogCardM classes={''} />
                                <BlogCardM classes={'hidden lg:block'} />
                            </div>
                            <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
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
                        <div>
                            <div className="w-full bg-blue my-28 rounded-3xl lg:flex items-center">

                                <div className='flex flex-col py-10 px-7 gap-y-7 lg:px-14 lg:gap-y-9'>
                                    <h1 className="text-white font-outfit text-2xl font-medium  lg:text-3xl">Want to be a blogger? its not that hard 😌</h1>
                                    <p className="text-white-shade-8 font-opensans lg:
                                text-lg">
                                        Log in to your account or create one and start posting and get viral
                                    </p>
                                    <div className="flex items-center gap-x-14">
                                      <Link className='w-2/4' href={'/register'} >
                                      <h3 className="bg-white  py-4 text-black text-center text-lg font-medium font-opensans rounded-2xl lg:w-44">Sign up</h3>
                                      </Link>
                                       <Link href={'/login'}>
                                       <h3 className="font-opensans  text-center ">Log in</h3></Link>
                                    </div>
                                </div>
                                <img src="images/blog/Girl.webp" className="rounded-b-3xl mt-10 lg:hidden" />
                                <img src="images/blog/Girl (2).webp" className="rounded-e-3xl w-80  hidden lg:flex" />
                            </div>
                        </div>
                        <div>
                            <section className="w-full my-40 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-3">
                                <SmallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
                                <SmallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
                                <SmallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
                                <SmallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
                            </section>
                        </div>
                    </section>
                    <hr className='h-[400px] w-[1.5px] bg-white-shade-4 hidden lg:flex' />
                    <section className='pl-6'>
                        <div>
                            <h1 className='text-black text-xl font-semibold font-outfit'>Categories</h1>
                            <div className='flex flex-col py-5'>
                                <Category classes={''} content={'Art & Culture'} />
                                <Category classes={''} content={'Destinations'} />
                                <Category classes={''} content={'Must Know'} />
                                <Category classes={''} content={'Top Architectural Sites'} />
                                <Category classes={''} content={'Top Geology Sites'} />
                                <Category classes={''} content={'Top Natural Resorts'} />
                                <Category classes={''} content={'Travel Experiences'} />
                            </div>
                        </div>
                        <div className='my-10'>
                            <h1 className='text-black text-xl font-semibold font-outfit py-8'>Most active bloggers</h1>
                            <div className='flex flex-col gap-y-6 '>
                                <Bloggers />
                                <Bloggers />
                                <Bloggers />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-black text-xl font-semibold font-outfit py-8'>Tags</h1>
                            <div className='flex items-center flex-wrap gap-x-2 gap-y-3'>
                                <Tag content={'Avaz'} />
                                <Tag content={'Classic music of iran'} />
                                <Tag content={'Dastgah'} />
                                <Tag content={'Folk music'} />
                                <Tag content={'Radif'} />
                                <Tag content={'setar'} />
                                <Tag content={'tar'} />
                                <Tag content={'tour'} />
                                <Tag content={'traditional music of iran'} />
                                <Tag content={'Museum'} />
                                <Tag content={'International'} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default page