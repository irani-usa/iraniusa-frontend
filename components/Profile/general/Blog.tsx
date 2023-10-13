import BlogCardM from '@/components/Pages/Blog/BlogCardM'
import React from 'react'
import { Arrowbtn, Sectiontitle } from '.'


interface BlogProps {
  title: string,
  desc:string,
  classes:string,
}


const Blog: React.FC<BlogProps> = (props) =>   {
  return (
    <div className=' w-full border-white-shade-4 border-b pb-8'>
      <div className={`${props.classes} container flex flex-col gap-y-6 mt-8 `}>
      <h1 className="text-[26px] font-outfit text-center font-bold text-black lg:text-3xl mt-5 lg:py-8">{props.title}</h1>
        <p className="text-center text-lg text-white-shade-9  font-opensans">{props.desc}</p>

        <BlogCardM classes={"lg:my-10 lg:w-[42%]"} readingTime={"3 min read"} title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"} summery={"Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"} author={"Anna Rosé"} publish={"Posted just now"} avatar={""} cover={"/images/blog/UsaFlag.webp"} info={false} view={'29'} isview={true} like={'29'} cm={'12'} />


        <Arrowbtn classes={'lg:hidden'} />
      </div>
    </div>
  )
}

export default Blog