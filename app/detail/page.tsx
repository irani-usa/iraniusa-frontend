import SmallBanner from '@/components/Banners/SmallBanner'
import { BlogCardM, Bloggers, Category, LawyarsCard, Tag } from '@/components/Pages/Blog'
import { Author } from '@/components/Pages/Blog/Detail/Author'
import { Date } from '@/components/Pages/Blog/Detail/Date'
import { Info } from '@/components/Pages/Blog/Detail/Info'
import { SocialMed } from '@/components/Pages/Blog/Detail/SocialMed'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (  
    <>
    <section className="container flex flex-col">    
    <div className="w-full lg:flex flex-row-reverse lg:items-start gap-x-10 mt-10">
    <section className="w-full lg:pl-5 lg:border-l border-white-shade-4">
      <div>
            <h1 className='text-[26px] text-black lg:text-3xl font-outfit font-semibold lg:w-[52%]'>Why should you use and invest time in the Irani.World platform?</h1>
            <SocialMed/>
            <div className='flex-col lg:flex lg:flex-row-reverse items-center justify-between gap-y-4 w-full pb-5'>
              <div className='flex items-center justify-between gap-x-4 py-3'> 
              <Date date={'September 4, 2020'} />
              <Author name={'sajjadezati'} avatar={'/images/blog/User.webp'}  />
              </div>
              <Info view={'20k'} like={'23'} dislike={'6'} />
            </div>
            <div className='w-full h-[400px] rounded-2xl bg-center bg-cover' style={{ backgroundImage:`url('/images/blog/FreedomBanner.png')` }}>

            </div>
          </div>
          <section className="w-full flex flex-col gap-4 py-10">
        <p className="text-sm text-white-shade-10 font-medium font-inter leading-5">Bringing Iranian businesses and professionals together has valuable positive impact both for the individual Iranian as well as the community as a whole. At minimum, community solidarity will help Iranian businesses survive hard times. In good times, community solidarity is a business bonus that can go to planning future growth, sustainability, or innovation. </p>
        <p className="text-sm text-white-shade-10 font-medium font-inter leading-5">Bringing Iranian businesses and professionals together has valuable positive impact both for the individual Iranian as well as the community as a whole. At minimum, community solidarity will help Iranian businesses survive hard times. In good times, community solidarity is a business bonus that can go to planning future growth, sustainability, or innovation. </p>
        <div className="flex flex-col gap-6 lg:flex lg:flex-row items-center py-6">
          <div className='w-full h-[400px] rounded-2xl bg-center bg-cover' style={{ backgroundImage:`url('/images/blog/UsaFlag.webp')` }}>
          </div>
          <div className='w-full h-[400px] rounded-2xl bg-center bg-cover' style={{ backgroundImage:`url('/images/blog/blogCard.webp')` }}>
          </div>
        </div>
        <p className="text-sm text-white-shade-10 font-medium font-inter leading-5">Bringing Iranian businesses and professionals together has valuable positive impact both for the individual Iranian as well as the community as a whole. At minimum, community solidarity will help Iranian businesses survive hard times. In good times, community solidarity is a business bonus that can go to planning future growth, sustainability, or innovation. </p>
        <p className="text-sm text-white-shade-10 font-medium font-inter leading-5">Bringing Iranian businesses and professionals together has valuable positive impact both for the individual Iranian as well as the community as a whole. At minimum, community solidarity will help Iranian businesses survive hard times. In good times, community solidarity is a business bonus that can go to planning future growth, sustainability, or innovation. </p>
      </section>
      </section>
      <section className="pb-4 lg:w-1/3">
      <div className="flex items-center justify-between border border-white-shade-4 rounded-2xl py-1 px-1 w-full my-4 lg:my-0">
        <input className="w-[60%] text-white-shade-15 font-semibold focus:outline-none px-3 lg:pl-1" type="text" placeholder="Search blogs, authors.."/>
        <button className="text-white bg-blue h-full w-24 rounded-2xl py-3" type="button">Search</button>
      </div>
        <div>
          <h1 className="text-black text-xl font-semibold font-outfit pt-8">
            Categories
          </h1>
          <div className="flex flex-col py-5">
            <Category classes={""} content={"Art & Culture"} />
            <Category classes={""} content={"Destinations"} />
            <Category classes={""} content={"Must Know"} />
            <Category classes={""} content={"Top Architectural Sites"} />
            <Category classes={""} content={"Top Geology Sites"} />
            <Category classes={""} content={"Top Natural Resorts"} />
            <Category classes={""} content={"Travel Experiences"} />
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-black text-xl font-semibold font-outfit py-8">
            Most active bloggers
          </h1>
          <div className="flex flex-col gap-y-6 ">
            <Bloggers
              classes={""}
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
              like={"60k"}
            />
            <Bloggers
              classes={""}
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
              like={"60k"}
            />
            <Bloggers
              classes={""}
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
              like={"60k"}
            />
          </div>
        </div>
        <div>
          <h1 className="text-black text-xl font-semibold font-outfit py-8">
            Tags
          </h1>
          <div className="flex items-center flex-wrap gap-x-2 gap-y-3">
            <Tag content={"Avaz"} />
            <Tag content={"Classic music of iran"} />
            <Tag content={"Dastgah"} />
            <Tag content={"Folk music"} />
            <Tag content={"Radif"} />
            <Tag content={"setar"} />
            <Tag content={"tar"} />
            <Tag content={"tour"} />
            <Tag content={"traditional music of iran"} />
            <Tag content={"Museum"} />
            <Tag content={"International"} />
          </div>
        </div>
      </section>
    </div>
    <div className="flex flex-col items-center pt-9 border-t border-white-shade-4 mt-3">  
      <h1 className="text-2xl font-outfit font-semibold py-8">More Popular Blogs</h1>  
    <div className="overflow-x-auto w-full no-scroll flex items-center gap-x-6 container">
       <BlogCardM
         classes={""}
         readingTime={"3 min read"}
         title={
           "Exploring Shirez Canyon in the Heart of Zagros Mountains"
         }
         summery={
           "Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"
         }
         author={"Anna Rosé"}
         publish={"Posted just now"}
         avatar={""}
         cover={"/images/blog/UsaFlag.webp"}
         info={true}
         isview={false}
         view={""}
         like={""}
         cm={""}
       />
       <BlogCardM
         classes={""}
         readingTime={"3 min read"}
         title={
           "Exploring Shirez Canyon in the Heart of Zagros Mountains"
         }
         summery={
           "Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"
         }
         author={"Anna Rosé"}
         publish={"Posted just now"}
         avatar={""}
         cover={"/images/blog/UsaFlag.webp"}
         info={true}
         isview={false}
         view={""}
         like={""}
         cm={""}
       />
       <BlogCardM
         classes={""}
         readingTime={"3 min read"}
         title={
           "Exploring Shirez Canyon in the Heart of Zagros Mountains"
         }
         summery={
           "Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"
         }
         author={"Anna Rosé"}
         publish={"Posted just now"}
         avatar={""}
         cover={"/images/blog/UsaFlag.webp"}
         info={true}
         isview={false}
         view={""}
         like={""}
         cm={""}
       />
     </div>
     <section className="flex justify-center gap-x-3 my-12 lg:hidden">
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </section>
     </div>
    </section>
 </>
  )
}

export default page;