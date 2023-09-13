
import React from 'react'
import NormallBanner from '@/components/AdsBanner/NormalBanner'

const NormalBannerList = () => {
    return (
        <section className="container mb-40 flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-3">
            <NormallBanner name={'Supplemental income'} jobTitle={'Dentist'} />
        </section>
    )

}

export default NormalBannerList