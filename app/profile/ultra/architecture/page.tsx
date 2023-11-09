import React from 'react'

import About from '@/components/Profile/business/starter/About'
import { Cover, Avatar, UserTitle, Blog, Navigation } from '@/components/Profile/general'
import OverlayMenu from '@/components/Layout/OverlayMenu'
import { Intro } from '@/components/Profile/ultra/architecture/Intro'
import Team from '@/components/Profile/business/pro/Team'
import Exprince from '@/components/Profile/business/starter/Exprince'
import Social  from '@/components/Profile/ultra/architecture/Social'
import { Project } from '@/components/Profile/ultra/architecture/Project'
import Values from '@/components/Profile/ultra/architecture/Values'
import RentForm from '@/components/Profile/ultra/architecture/RentForm'
import Gallery from '@/components/Profile/A&E/pro/Gallery'
import { Frequent } from '@/components/Profile/ultra/architecture/Frequent'
import Terms from '@/components/Profile/business/pro/Terms'



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
        <section className='lg:container lg:flex'>
            <Navigation />
        <section className='lg:border-l lg:border-white-shade-4 '>
                <Intro title={'Magnificent architect design'} desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys '} cover={'/images/profile/ultra/building.png'} />
                <About about={'Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide '} city={' Los angless'} name={'Jason todd'} job={'Founder'} cover={'/images/blog/User.webp'} title={'What is our company all about?'} />
                <Team />
                <Exprince exprince={'Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide '} />
                <Project />
                <Values />
                <RentForm desc={'We usually respond before 27 hours'} />
                <Gallery />
                <Social desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum '} />
                <Blog title={'Blog'} desc={'is simply dummy text of the printing and typesetting industry. Lorem Ipsum '} classes={'lg:pl-5'} />
                <Frequent />
                <Terms />
            </section>
        </section>
        </section>
    )
}

export default page