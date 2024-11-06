import React from 'react'

import OverlayMenu from '@/components/Layout/OverlayMenu'

import { Cover, Avatar, UserTitle, Blog, Navigation } from '@/components/Profile/general'

import Intro from '@/components/Profile/ultra/resturant/Intro'
import About from '@/components/Profile/business/starter/About'
import Team from '@/components/Profile/business/pro/Team'
import { Menu } from '@/components/Profile/ultra/resturant/Menu'
import { MainMenu } from '@/components/Profile/ultra/resturant/MainMenu'
import Gallery from '@/components/Profile/A&E/pro/Gallery'
import Contact from '@/components/Profile/business/pro/Contact'
import { Social } from '@/components/Profile/Professional/Pro'
import Services from '@/components/Profile/business/pro/Services'


const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative   mt-10  lg:mb-28 mb-72 mx-auto">
        <Cover background={"/images/profile/ultra/Rcover.png"} />
        <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
          <Avatar background={"/images/profile/ultra/Rprof.png"} Contact={true} />
          <UserTitle
            fullname={"Dark Coffee"}
            jobtitle={"Restaurant and cafe"}
            city={"Product designer"}
            isPro={true}
            blogLevel={"Active"}
            follower={"11.2 k"}
            following={"23"} />
        </div>
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className='lg:flex lg:container lg:pr-0 px-2'>
        <Navigation />
        <section className='lg:border-l lg:border-white-shade-4 lg:w-3/4 w-full'>
          <Intro title={"Feel the comfort with newst shoes and sweaters "} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/business/A (2).png"} />
          <About compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"} about={'Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide '} city={'Los angless'} name={'Jason todd'} job={'Founder'} cover={'/images/blog/User.webp'} title={'Who we are?'} />
          <Team />
          <Services />
          <Menu title={'Special Menu'} />
          <Menu title={'Lunch Menu'} />
          <Menu title={'Dinner Menu'} />
          <MainMenu title={'Main Menu'} />
          <Gallery />
          <Blog title={"Blog"} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "} classes={"lg:pl-5"} />
          <div className='container'>
            <Contact />
          </div>
          <Social desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum '} />
        </section>
      </section>
    </section>
  )
}

export default page