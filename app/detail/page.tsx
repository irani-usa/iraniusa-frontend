import SmallBanner from '@/components/Banners/SmallBanner'
import { BlogCardM, Bloggers, Category, LawyarsCard, Tag } from '@/components/Pages/Blog'
import { Author } from '@/components/Pages/Blog/Detail/Author'
import { Date } from '@/components/Pages/Blog/Detail/Date'
import { Info } from '@/components/Pages/Blog/Detail/Info'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (  
    <>
    <div className="w-full lg:flex container lg:items-start gap-x-10 mt-10">
    <section className="pl-5 lg:w-1/3">
        <div>
          <h1 className="text-black text-xl font-semibold font-outfit">
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
      <section className="lg:pr-5 lg:border-r border-white-shade-4">
      <div>
            <h1 className='text-black text-2xl font-semibold'>Why should you use and invest time in the Irani.World platform?</h1>
            <div>
              <div className='flex items-center gap-x-4 mt-10'> 
              <Date date={'September 4, 2020'} />
              <Author name={'sajjadezati'} avatar={'/images/blog/User.webp'}  />
              </div>
              <Info view={'20k'} like={'23'} dislike={'6'} />
            </div>
            <div className='w-full h-[400px] rounded-2xl bg-center bg-cover' style={{ backgroundImage:`url('/images/blog/FreedomBanner.png')` }}>

            </div>
          </div>
      </section>

   
    </div>
       <div className="lg:flex items-center gap-x-6 container mt-32">
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
 </>
  )
}

export default page