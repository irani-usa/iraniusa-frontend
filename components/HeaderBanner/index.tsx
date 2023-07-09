
import Discount from '@/components/Icons/Outline/Discount'
import { Facebook, WhatsApp, Youtube } from '@/components/Icons/Socials'
import { Mail, Phone } from '@/components/Icons/Solid'

import Link from 'next/link'

function HeaderBanner() {
  return (
    <section className='w-full h-auto py-4 lg:py-5 bg-red text-white font-opensans'>
      <div className='container flex justify-center lg:justify-between ic h-full'>
        <div className='hidden lg:flex gap-x-4'>
          <Link href={"#"}>
            <Youtube />
          </Link>
          <Link href={"#"}>
            <WhatsApp />
          </Link>
          <Link href={"#"}>
            <Facebook />
          </Link>
        </div>
        <h5 className='flex gap-x-2 ic text-center text-sm ml-0 lg:ml-20'>
          <Discount />
          Persian platform in USA
        </h5>
        <div className='hidden lg:flex gap-x-4 ic'>
          <Link className='flex ic gap-x-2 text-sm' href={"#"}>
            <Mail />
            unreal@outlook.com
          </Link>
          <Link className='flex ic gap-x-2 text-sm' href={"#"}>
            <Phone />
            (+49) 71112196760
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeaderBanner