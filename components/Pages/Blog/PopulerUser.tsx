import Link from 'next/link'
import React from 'react'

interface PopularUserProps {
  name: string,
  job: string,
  avatar: string,
}

const PopularUser: React.FC<PopularUserProps> = (props) => {
  return (
    <>
      <Link className='w-3/4 lg:w-1/4' href={"#"}>
        <div className='w-full h-[110px] flex justify-start items-center gap-x-5 rounded-3xl pr-20 border-white-shade-4 border-[1.5px]'>
          <div className='w-14 h-14 rounded-full bg-cover bg-center ml-7' style={{ backgroundImage: `url(${props.avatar})` }}>

          </div>
          <div className='flex flex-col items-start gap-y-1'>
            <span className='text-black text-lg font-inter font-semibold flex items-center
            gap-x-3'>
              {props.name}
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.577 5.26501L10.7837 4.34335C10.632 4.16835 10.5095 3.84168 10.5095 3.60835V2.61668C10.5095 1.99835 10.002 1.49085 9.38367 1.49085H8.392C8.16451 1.49085 7.83201 1.36835 7.657 1.21668L6.73534 0.423347C6.33284 0.0791805 5.67367 0.0791805 5.26534 0.423347L4.3495 1.22251C4.17451 1.36835 3.84201 1.49085 3.61451 1.49085H2.60534C1.987 1.49085 1.47951 1.99835 1.47951 2.61668V3.61418C1.47951 3.84168 1.35701 4.16835 1.21117 4.34335L0.423672 5.27085C0.0853386 5.67335 0.0853386 6.32668 0.423672 6.72918L1.21117 7.65668C1.35701 7.83168 1.47951 8.15835 1.47951 8.38585V9.38335C1.47951 10.0017 1.987 10.5092 2.60534 10.5092H3.61451C3.84201 10.5092 4.17451 10.6317 4.3495 10.7833L5.27117 11.5767C5.67367 11.9208 6.33284 11.9208 6.74117 11.5767L7.66284 10.7833C7.83784 10.6317 8.16451 10.5092 8.39784 10.5092H9.3895C10.0078 10.5092 10.5153 10.0017 10.5153 9.38335V8.39168C10.5153 8.16418 10.6378 7.83168 10.7895 7.65668L11.5828 6.73501C11.9212 6.33251 11.9212 5.66751 11.577 5.26501ZM8.427 4.89751L5.6095 7.71501C5.52784 7.79668 5.41701 7.84335 5.30034 7.84335C5.18367 7.84335 5.07284 7.79668 4.99117 7.71501L3.5795 6.30335C3.41034 6.13418 3.41034 5.85418 3.5795 5.68501C3.74867 5.51585 4.02867 5.51585 4.19784 5.68501L5.30034 6.78751L7.80867 4.27918C7.97784 4.11001 8.25784 4.11001 8.427 4.27918C8.59617 4.44835 8.59617 4.72835 8.427 4.89751Z" fill="#00A3FF" />
              </svg>
            </span>
            <span className='text-white-shade-7 font-inter font-medium text-sm'>
              {props.job}
            </span>
          </div>
        </div></Link>
    </>
  )
}

export default PopularUser