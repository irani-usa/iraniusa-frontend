import BlogCardM from '@/components/Pages/Blog/BlogCardM'
import React from 'react'
import { Arrowbtn, Sectiontitle } from '.'
import IconElement from './IconElement'
import BlogIcon from '@/components/Icons/Profile/Blog'


interface BlogProps {
  title: string,
  desc:string,
  classes:string,
}


const Blog: React.FC<BlogProps> = (props) =>   {
  return (
    <div className=' w-full border-white-shade-4 border-b py-16 container'>
      <div className={`${props.classes}  flex flex-col `}>
      <IconElement icon={<BlogIcon />}/>

      <h1 className="text-[26px] font-outfit text-center font-medium text-black lg:text-3xl  py-3">{props.title}</h1>
        <p className="text-center text-lg text-white-shade-9  font-opensans">{props.desc}</p>

      <div className='lg:flex gap-5 overflow-x-scroll no-scroll mt-14 lg:mt-4'>
      <BlogCardM classes={"lg:my-10 hidden lg:block lg:min-w-[42%] lg:w-[42%]"} readingTime={"3 min read"} title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"} summery={"Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"} author={"Anna Rosé"} publish={"Posted just now"} avatar={""} cover={"/images/blog/UsaFlag.webp"} info={false} view={'29'} isview={true} like={'29'} cm={'12'} />
        <BlogCardM classes={"lg:my-10 hidden lg:block lg:min-w-[42%] lg:w-[42%]"} readingTime={"3 min read"} title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"} summery={"Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"} author={"Anna Rosé"} publish={"Posted just now"} avatar={""} cover={"/images/profile/professional/blog-cover.png"} info={false} view={'29'} isview={true} like={'29'} cm={'12'} />
        <BlogCardM classes={"lg:my-10 lg:min-w-[42%] lg:w-[42%]"} readingTime={"3 min read"} title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"} summery={"Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"} author={"Anna Rosé"} publish={"Posted just now"} avatar={""} cover={"/images/profile/professional/blog-cover.png"} info={false} view={'29'} isview={true} like={'29'} cm={'12'} />

      </div>

        <Arrowbtn classes={'mt-10 lg:mt-0'} />
      </div>
    </div>
  )
}

export default Blog