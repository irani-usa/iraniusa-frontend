
import React from 'react'
import SmallBanner from '@/components/AdsBanner/SmallBanner'

const SmallBannerList = () => {
    return (
        <section className="container mb-40 flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-3">
            <SmallBanner />
            <SmallBanner />
            <SmallBanner />
        </section>
    )
}

export default SmallBannerList