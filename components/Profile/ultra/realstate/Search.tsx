
import React from 'react'
import { Input } from './Input'
import { Button } from '@/components/Forms'
import DropDown from './DropDown'
import { Switch } from './Switch'
import { Select } from './Select'
import { Exploring } from '@/components/Icons/Profile/Exploring'



interface SearchProps {
    title: string,
    desc: string,
    cover: string,

}


export const Search: React.FC<SearchProps> = (props) => {
    return (
        <section className='container lg:px-2 lg:mt-1  '>
            <div className='bg-white-shade-2  pt-7 lg:flex '>
                <div className='px-7 lg:pl-14 lg:pt-8 lg:w-2/3'>
                    <h1 className='font-outfit text-black text-2xl font-bold lg:text-4xl lg:max-w-xl'>{props.title}</h1>
                    <p className='text-white-shade-9 text-[17px] font-medium py-5 lg:max-w-md '>{props.desc}</p>
                    <div className='flex flex-col gap-y-2'>
                        <Select />
                        <Switch />
                        <DropDown />
                        <Button content={'Search'} classes={'bg-black h-[70px] rounded-3xl'} />
                        <Input />
                    </div>
                </div>
                <div className='px-2 mt-20 pb-2 lg:w-1/3' >
                    <div className='bg-cover bg-center w-full h-[485px] rounded-t-full flex items-center flex-col justify-end pb-9' style={{ backgroundImage: `url(${props.cover})` }}>
                        <Exploring />
                    </div>
                </div>
            </div>

        </section>
    )
}
