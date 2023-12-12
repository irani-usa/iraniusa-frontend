
import React from 'react'
import { Verified } from '../Icons/Solid'
import Link from 'next/link'

interface NormallBanner {
  name: string,
  jobTitle: string,
}

const NormallBanner: React.FC<NormallBanner> = (props) => {
  return (
    <Link href={'/'} className='relative flex flex-col items-center justify-center gap-y-5 w-full py-10 h-auto bg-cover bg-center rounded-2xl hover:cursor-pointer' style={{ backgroundImage: `url('/images/banner/sample.jpg')` }}>
      <div className='flex'>
        <div className='w-20 h-20 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/1.png')` }}></div>
        <div className='w-20 h-20 -ml-6 rounded-full bg-cover bg-center' style={{ backgroundImage: `url('/images/avatars/2.png')` }}></div>
      </div>
      <div className='flex flex-col gap-y-2 justify-center'>
        <h3 className='flex items-center text-white font-opensans font-medium text-2xl text-center'>
          {props.name}
          <Verified />
        </h3>
        <h4 className='text-white-shade-8 text-lg text-center'>
          {props.jobTitle}
        </h4>
      </div>
      <svg className='-mt-2' width="298" height="12" viewBox="0 0 298 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="171" y1="5.5" x2="298" y2="5.49999" stroke="#595959" />
        <line x1="-4.3688e-08" y1="5.5" x2="127" y2="5.49999" stroke="#595959" />
        <path d="M149 0L150.587 3.81565L154.706 4.1459L151.568 6.83435L152.527 10.8541L149 8.7L145.473 10.8541L146.432 6.83435L143.294 4.1459L147.413 3.81565L149 0Z" fill="white" />
      </svg>
      <div className='flex flex-col gap-y-3 text-center text-white-shade-8 -mt-2'>
        <h4 className='text-xl font-vazirmatn'>
          کمک های دولتی دریافت کنید
        </h4>
        <p className='text-sm'>
          Medium constructions represent
          <br />
          innovativeconstruction services
        </p>
      </div>
      <div className="absolute top-4 right-5 flex flex-col gap-y-4 lg:flex-row gap-x-5 lg:static">
        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4591 6C21.6891 6.35 20.8591 6.58 19.9991 6.69C20.8791 6.16 21.5591 5.32 21.8791 4.31C21.0491 4.81 20.1291 5.16 19.1591 5.36C18.3691 4.5 17.2591 4 15.9991 4C13.6491 4 11.7291 5.92 11.7291 8.29C11.7291 8.63 11.7691 8.96 11.8391 9.27C8.27906 9.09 5.10906 7.38 2.99906 4.79C2.62906 5.42 2.41906 6.16 2.41906 6.94C2.41906 8.43 3.16906 9.75 4.32906 10.5C3.61906 10.5 2.95906 10.3 2.37906 10V10.03C2.37906 12.11 3.85906 13.85 5.81906 14.24C5.18979 14.4122 4.52916 14.4362 3.88906 14.31C4.16067 15.1625 4.6926 15.9084 5.41008 16.4429C6.12756 16.9775 6.99451 17.2737 7.88906 17.29C6.37269 18.4904 4.49306 19.1393 2.55906 19.13C2.21906 19.13 1.87906 19.11 1.53906 19.07C3.43906 20.29 5.69906 21 8.11906 21C15.9991 21 20.3291 14.46 20.3291 8.79C20.3291 8.6 20.3291 8.42 20.3191 8.23C21.1591 7.63 21.8791 6.87 22.4591 6Z"
              fill="white"
            />
          </svg>
        </Link>

        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
              fill="white"
            />
          </svg>
        </Link>

      

        <Link href={""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1420_27016)">
              <path
                d="M12.0094 24.0187C18.6419 24.0187 24.0187 18.6419 24.0187 12.0094C24.0187 5.37677 18.6419 0 12.0094 0C5.37677 0 0 5.37677 0 12.0094C0 18.6419 5.37677 24.0187 12.0094 24.0187Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.42474 11.8783C8.92279 10.3444 11.2611 9.35296 12.4395 8.8666C15.7692 7.48235 16.4614 7.23917 16.9103 7.22046C17.0038 7.22046 17.2283 7.23917 17.378 7.3514C17.4902 7.44493 17.5276 7.57588 17.5463 7.66941C17.565 7.76294 17.5837 7.96871 17.565 8.13706C17.378 10.0264 16.611 14.6468 16.1995 16.7606C16.0311 17.6585 15.6944 17.9578 15.3764 17.9952C14.6843 18.0513 14.1418 17.5276 13.4684 17.0973C12.4208 16.4052 11.8222 15.9749 10.7934 15.3015C9.61492 14.5159 10.3819 14.0856 11.0553 13.3935C11.2236 13.2064 14.3102 10.4192 14.3663 10.1573C14.3663 10.1199 14.385 10.0077 14.3102 9.95156C14.2353 9.89544 14.1418 9.91415 14.067 9.93285C13.9547 9.95156 12.2712 11.0739 8.99761 13.2813C8.51125 13.618 8.08101 13.7676 7.68818 13.7676C7.25794 13.7676 6.43487 13.5244 5.81757 13.3187C5.06932 13.0755 4.47072 12.9445 4.52684 12.533C4.56425 12.3272 4.86355 12.1028 5.42474 11.8783Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1420_27016">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </Link>
  )
}

export default NormallBanner