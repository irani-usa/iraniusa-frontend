
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import { Phone } from '../Icons/Solid'

const Footer = () => {
    return (
        <footer className='w-full mt-32'>
            <div className='flex items-center w-full h-20'>
                <ul className='navigation container h-full font-opensans font-medium text-white-shade-8 border-b border-white-shade-4  flex gap-x-8'>
                    <li className='active'>NewYork,USA</li>
                    <li>Stockholm,sweden</li>
                    <li>Dubai,UEA</li>
                    <li>Tehran,iran</li>
                </ul>
            </div>
            <section className='container flex py-10'>
                <div className='flex flex-col w-1/2 gap-y-6 text-white-shade-10'>
                    <Logo width={70} height={40} />
                    <p className='max-w-md'>
                        Our goal is not only to provide travel opportunities, but to strengthen the unity of nations and introduce the art and culture of the destination country: you would see the lifestyle of the people, hear their stories and...
                        <Link href={"/"} className='text-black'> Read more</Link>
                    </p>
                    <div className='flex flex-col gap-y-4'>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                                <Phone />
                            </div>
                            <div className='flex flex-col'>
                                <span>Tel</span>
                                <span className='text-black'>(+49) 71112196760</span>
                            </div>
                        </Link>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                                <Phone />
                            </div>
                            <div className='flex flex-col'>
                                <span>Contact us at</span>
                                <span className='text-black'>info@example.org</span>
                            </div>
                        </Link>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                                <Phone />
                            </div>
                            <div className='flex flex-col'>
                                <span>Address</span>
                                <span className='text-black'>
                                    Birkenweg.20 24107 Kiel
                                    <br />
                                    - Christophstraße 26, 70180 Stuttgart
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer