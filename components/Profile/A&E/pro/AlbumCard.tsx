import React from 'react'

interface McardProps {
    background:string,
    trackname:string,
    artist:string,
    class:string,
    date:string,
  }
  

const Mcard: React.FC<McardProps> = (props) =>   {
  return (
    <section className={`${props.class} min-w-[70%] flex flex-col items-start gap-y-4  `}>
        <div className='w-full h-[280px] rounded-3xl bg-center bg-cover ' style={{ backgroundImage:  `url(${props.background})` }}>
        </div>
        <div className='flex items-start justify-between w-full'>
        <div>
        <h1 className='text-black text-xl font-outfit font-semibold mt-3'>{props.trackname}</h1>
        <div className='flex flex-col  '>
            <span className='text-white-shade-8 font-medium text-lg mt-3'>{props.artist}</span>
            <span className='text-white-shade-8 font-medium'>{props.date}</span>
        </div>
        </div>
        <div className="flex items-center justify-center bg-blue rounded-full mt-3 p-5">
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.16507 1.27874L6.20988 1.30092C6.7719 1.5791 7.31879 1.86447 7.80475 2.14224C8.35859 2.4588 8.95722 2.83631 9.55632 3.23411L9.59656 3.26083C10.6373 3.95183 11.4732 4.50687 12.042 5.04606C12.6396 5.61254 13 6.21462 13 7C13 7.78538 12.6396 8.38746 12.042 8.95395C11.4732 9.49313 10.6373 10.0482 9.59658 10.7392L9.55632 10.7659C8.95722 11.1637 8.35859 11.5412 7.80475 11.8578C7.31879 12.1355 6.7719 12.4209 6.20988 12.6991L6.16509 12.7213C5.13083 13.2332 4.29361 13.6476 3.59413 13.8522C2.85453 14.0684 2.18368 14.0757 1.53966 13.6822C0.904056 13.2939 0.590844 12.6987 0.410664 11.9418C0.237649 11.2151 0.169828 10.2603 0.0850951 9.06749L0.0819621 9.02339C0.0320394 8.32075 0 7.62657 0 7C0 6.37344 0.0320395 5.67925 0.0819623 4.97661L0.0850956 4.9325C0.169828 3.73967 0.237649 2.78491 0.410664 2.05816C0.590845 1.3013 0.904057 0.706135 1.53966 0.317767C2.18368 -0.0757449 2.85453 -0.0684468 3.59413 0.147817C4.29361 0.35235 5.13082 0.766775 6.16507 1.27874ZM3.30734 1.08355C2.73408 0.91592 2.38781 0.951661 2.07 1.14585C1.74378 1.34518 1.53237 1.65901 1.38468 2.27939C1.23195 2.92092 1.16818 3.79705 1.07956 5.04423C1.0306 5.73332 1 6.40347 1 7C1 7.59653 1.0306 8.26669 1.07956 8.95577C1.16817 10.2029 1.23195 11.0791 1.38468 11.7206C1.53237 12.341 1.74378 12.6548 2.07 12.8542C2.38781 13.0483 2.73407 13.0841 3.30734 12.9165C3.91065 12.74 4.66797 12.3673 5.75786 11.8278C6.30865 11.5552 6.8366 11.2794 7.29969 11.0147C7.82766 10.713 8.40627 10.3484 8.99412 9.95811C10.0846 9.23407 10.8468 8.72582 11.3456 8.253C11.8229 7.80055 12 7.43538 12 7C12 6.56462 11.8229 6.19945 11.3456 5.747C10.8468 5.27419 10.0846 4.76594 8.99413 4.04189C8.40627 3.65156 7.82766 3.28704 7.29969 2.98527C6.83659 2.72057 6.30864 2.44482 5.75786 2.17219C4.66797 1.63272 3.91065 1.25996 3.30734 1.08355Z"
              fill="white"
            />
          </svg>
        </div>
        </div>
    </section>
  )
}

export default Mcard