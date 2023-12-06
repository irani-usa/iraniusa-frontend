
import React from 'react'

interface FeatureCardProps {
    icon: React.ReactNode,
    title: string,
    value: string
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
    return (
        <div className='group flex items-center gap-x-4 w-full h-32 p-5 border border-white-shade-4 rounded-2xl hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
            <div className='p-3 border group-hover:border-white-shade-17 border-white-shade-4 rounded-full'>
                {props.icon}
            </div>
            <div className='flex flex-col gap-y-3'>
                <span className='text-xl font-opensans font-semibold group-hover:text-white text-black'>
                    {props.title}
                </span>
                <span className='text-lg font-opensans text-white-shade-10'>
                    {props.value}
                </span>
            </div>
        </div>
    )
}

export default FeatureCard