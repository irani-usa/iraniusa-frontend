
import React from 'react'
import FeatureCard from './FeatureCard'
import { CoffeeShop, Furniture, Liquor, Resturant } from '../../Icons/Outline'

const Feature = () => {
    return (
        <section className='flex overflow-x-scroll no-scroll lg:grid lg:grid-cols-4 gap-x-4'>
            <FeatureCard icon={<Resturant />} title={'Restaurants'} value={'+100k availabile'} />
            <FeatureCard icon={<Liquor />} title={'Liquor Store'} value={'+13.4K'} />
            <FeatureCard icon={<Furniture />} title={'Furniture'} value={'+11K'} />
            <FeatureCard icon={<CoffeeShop />} title={'Coffee Shop'} value={'+1K'} />
        </section>
    )
}

export default Feature