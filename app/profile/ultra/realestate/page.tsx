import React from 'react'


import OverlayMenu from '@/components/Layout/OverlayMenu'

import Team from '@/components/Profile/business/pro/Team'
import About from '@/components/Profile/business/starter/About'
import Exprince from '@/components/Profile/business/starter/Exprince'
import { Cover, Avatar, UserTitle, Blog, Navigation } from '@/components/Profile/general'
import { HomesCatgeroy } from '@/components/Profile/ultra/realstate/HomesCatgeroy'
import { Honor } from '@/components/Profile/ultra/realstate/Honor'
import { Project } from '@/components/Profile/ultra/realstate/Project'
import { Service } from '@/components/Profile/ultra/realstate/Service'
import Gallery from '@/components/Profile/A&E/pro/Gallery'
import Contact from '@/components/Profile/business/pro/Contact'
import { Social } from '@/components/Profile/Professional/Pro'
import { Search } from '@/components/Profile/ultra/realstate/Search'

const page = () => {
  return (
 <section>
          <OverlayMenu />
      <div className="w-full relative">
        <Cover background={"/images/profile/Cover.png"} />
      </div>
      <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-40 lg:mb-9">
        <Avatar background={"/images/profile/Prof.png"} Contact={true} />
        <UserTitle
          fullname={"Amin gholami"}
          jobtitle={"Product designer"}
          city={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
          follower={"11.2 k"}
          following={"23"}
        />
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className='lg:flex lg:container lg:pr-0'>
      <Navigation />
      <section className='lg:border-l lg:border-white-shade-4 '>
        <Search title={'Find your house for futures life, Dont waste time.'} desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys '} cover={'/images/profile/ultra/apartmant.png'} />
        <About about={'Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide '} city={' Los angless'} name={'Jason todd'} job={'Founder'} cover={'/images/blog/User.webp'} title={'What is our company all about?'} />
        <Honor />
        <Team />
        <Service />
        <Exprince exprince={'Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide '} />
        <Project />
       <HomesCatgeroy title={'For Sale'} classes={''} />
       <Gallery />
       <Blog title={"Blog"} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "} classes={"lg:pl-5"} />
      <div className='container lg:px-0'>
      <Contact />
      </div>
      <Social desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum '} />
      </section>
      </section>
 </section>
  )
}

export default page