
import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (
<div className=' w-full border-white-shade-4 border-b pb-8 lg:pb-12'>
    <div className='container flex flex-col lg:items-center gap-y-6 mt-8 lg:px-0'>
    <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl lg:mt-9"> Socials</h1>
          <p className="text-center text-lg text-white-shade-9  font-opensans">is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
       <section className='grid grid-cols-4 gap-y-4 mt-7 lg:grid-cols-6 lg:w-[500px] gap-x-5'>
        <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>
        <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>     <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>     <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>     <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>     <div className='w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full '>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4794 4.95642C21.4939 5.16613 21.4939 5.37584 21.4939 5.58747C21.4939 12.0362 16.5778 19.4735 7.58846 19.4735V19.4696C4.93297 19.4735 2.33265 18.7139 0.097168 17.2817C0.483297 17.3281 0.871361 17.3513 1.26039 17.3523C3.46104 17.3542 5.59878 16.6168 7.33007 15.2591C5.23878 15.2194 3.40491 13.8578 2.76426 11.87C3.49685 12.011 4.25168 11.9821 4.97072 11.7859C2.69072 11.3259 1.05039 9.32546 1.05039 7.00226C1.05039 6.981 1.05039 6.96071 1.05039 6.94042C1.72975 7.31827 2.49039 7.52798 3.26846 7.55117C1.12104 6.11802 0.459103 3.26525 1.75588 1.03483C4.23717 4.08378 7.89813 5.93731 11.8281 6.13348C11.4343 4.43844 11.9723 2.66222 13.242 1.47067C15.2104 -0.377064 18.3062 -0.282358 20.1565 1.68231C21.251 1.4668 22.3001 1.06575 23.2601 0.497516C22.8952 1.62722 22.1317 2.58684 21.1117 3.19663C22.0804 3.0826 23.0268 2.82361 23.9181 2.42836C23.262 3.41021 22.4356 4.26546 21.4794 4.95642Z" fill="black"/>
</svg>

        </div>
        
       </section>
       <div className='flex  flex-col gap-y-4 mt-6 lg:flex-row lg:gap-x-12 lg:pt-10'>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35489 2.57292e-07H10.6452C12.1154 -1.24266e-05 13.2799 -2.25306e-05 14.1912 0.122508C15.1292 0.248611 15.8883 0.514304 16.487 1.11299C17.0857 1.71169 17.3514 2.47084 17.4775 3.40878C17.6 4.32015 17.6 5.48466 17.6 6.95487V7.04513C17.6 8.51534 17.6 9.67985 17.4775 10.5912C17.3514 11.5292 17.0857 12.2883 16.487 12.887C15.8883 13.4857 15.1292 13.7514 14.1912 13.8775C13.2799 14 12.1154 14 10.6452 14H7.3549C5.88469 14 4.72018 14 3.80881 13.8775C2.87087 13.7514 2.11171 13.4857 1.51302 12.887C0.914329 12.2883 0.648635 11.5292 0.522533 10.5912C0.400002 9.67985 0.400012 8.51534 0.400025 7.04513V6.95487C0.400012 5.48466 0.400002 4.32015 0.522533 3.40878C0.648635 2.47084 0.914329 1.71169 1.51302 1.11299C2.11171 0.514304 2.87087 0.248611 3.80881 0.122508C4.72018 -2.25306e-05 5.88468 -1.24266e-05 7.35489 2.57292e-07ZM3.9687 1.31181C3.16383 1.42002 2.70012 1.62296 2.36155 1.96152C2.02298 2.30009 1.82004 2.76381 1.71183 3.56868C1.6013 4.39081 1.60003 5.47454 1.60003 7C1.60003 8.52546 1.6013 9.60919 1.71183 10.4313C1.82004 11.2362 2.02298 11.6999 2.36155 12.0385C2.70012 12.377 3.16383 12.58 3.9687 12.6882C4.79084 12.7987 5.87457 12.8 7.40002 12.8H10.6C12.1255 12.8 13.2092 12.7987 14.0313 12.6882C14.8362 12.58 15.2999 12.377 15.6385 12.0385C15.9771 11.6999 16.18 11.2362 16.2882 10.4313C16.3988 9.60919 16.4 8.52546 16.4 7C16.4 5.47454 16.3988 4.39081 16.2882 3.56868C16.18 2.76381 15.9771 2.30009 15.6385 1.96152C15.2999 1.62295 14.8362 1.42002 14.0313 1.31181C13.2092 1.20127 12.1255 1.2 10.6 1.2H7.40003C5.87457 1.2 4.79084 1.20127 3.9687 1.31181ZM3.73909 3.41589C3.95123 3.16132 4.32957 3.12693 4.58414 3.33907L6.31125 4.77833C7.05762 5.4003 7.57581 5.83073 8.01329 6.1121C8.43678 6.38447 8.72397 6.4759 9.00003 6.4759C9.27608 6.4759 9.56327 6.38447 9.98676 6.1121C10.4242 5.83073 10.9424 5.4003 11.6888 4.77833L13.4159 3.33907C13.6705 3.12693 14.0488 3.16132 14.261 3.41589C14.4731 3.67046 14.4387 4.04879 14.1841 4.26093L12.4269 5.72526C11.7179 6.31618 11.1431 6.79514 10.6359 7.12138C10.1075 7.46122 9.59289 7.6759 9.00003 7.6759C8.40716 7.6759 7.89257 7.46122 7.36417 7.12138C6.85692 6.79514 6.2822 6.31619 5.57311 5.72527L3.81591 4.26093C3.56135 4.04879 3.52695 3.67046 3.73909 3.41589Z" fill="black"/>
</svg>

                            </div>
                            <div className='flex flex-col font-opensans'>
                         
                         <span className='text-white-shade-9 lg:text-lg'>E-mail</span>
                         <span className='text-black text-lg font-semibold lg:text-xl'>
                         unreal@outlook.com
                         </span>
                     </div>
                        </Link>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.17386 0.873522C3.15481 -0.15923 4.77739 0.0342613 5.58826 1.18113L6.59705 2.60791C7.24563 3.52525 7.19085 4.80058 6.41679 5.61552L6.22091 5.82175C6.22036 5.82318 6.21979 5.82472 6.21919 5.82639C6.20884 5.85548 6.18267 5.94811 6.20843 6.12391C6.26183 6.48834 6.54315 7.22889 7.68527 8.43133C8.83099 9.63756 9.52593 9.92184 9.84796 9.97414C9.98689 9.99671 10.0596 9.9771 10.0827 9.96894L10.4096 9.62477C11.1087 8.88884 12.1985 8.74385 13.0773 9.24966L14.6057 10.1294C15.912 10.8813 16.2161 12.7207 15.1721 13.8198L14.0357 15.0162C13.681 15.3897 13.1973 15.7084 12.5997 15.7674C11.1406 15.9114 7.7605 15.7238 4.21699 11.9932C0.91046 8.51203 0.282316 5.48411 0.202911 4.00473L0.735793 3.97613L0.202911 4.00473C0.163679 3.27379 0.489503 2.64684 0.918183 2.19552L2.17386 0.873522ZM4.60843 1.8739C4.19855 1.29418 3.4622 1.25959 3.04393 1.69995L1.78825 3.02194C1.52314 3.30106 1.38404 3.62097 1.40119 3.94041C1.46602 5.14827 1.98616 7.90209 5.08706 11.1668C8.33841 14.5898 11.3338 14.6865 12.4818 14.5732C12.7088 14.5508 12.9424 14.4248 13.1656 14.1898L14.302 12.9934C14.7923 12.4772 14.6638 11.5474 14.0071 11.1694L12.4787 10.2897C12.0685 10.0536 11.5881 10.1266 11.2797 10.4512L10.9153 10.8348L10.4936 10.4342C10.9153 10.8348 10.9148 10.8354 10.9142 10.836L10.9131 10.8372L10.9107 10.8396L10.9057 10.8448L10.8942 10.8561C10.8859 10.8641 10.8764 10.8728 10.8657 10.8823C10.8442 10.9011 10.8176 10.9226 10.7856 10.9453C10.7215 10.9908 10.6361 11.0407 10.5282 11.0833C10.3074 11.1704 10.0158 11.2171 9.65559 11.1586C8.95359 11.0446 8.03349 10.5404 6.8152 9.25775C5.59332 7.97134 5.12568 7.01156 5.02111 6.29787C4.96788 5.93462 5.01048 5.64374 5.08864 5.42409C5.12708 5.31607 5.17246 5.22994 5.21432 5.16453C5.23519 5.13191 5.25508 5.1046 5.27267 5.08238C5.28146 5.07127 5.28968 5.06143 5.29716 5.05282L5.30782 5.04083L5.3127 5.03553L5.31503 5.03304L5.31616 5.03184C5.31671 5.03126 5.31726 5.03068 5.7426 5.43466L5.31727 5.03067L5.54672 4.7891C5.90315 4.41385 5.95493 3.77834 5.61722 3.30069L4.60843 1.8739Z" fill="black"/>
</svg>

                            </div>
                            <div className='flex flex-col font-opensans'>
                         
                         <span className='text-white-shade-9 lg:text-lg'>Call</span>
                         <span className='text-black text-lg font-semibold lg:text-xl'>
                         (603) 555-0123
                         </span>
                     </div>
                        </Link>
                        <Link className='flex items-center gap-x-4' href={"#"}>
                            <div className='flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7129 6.39846C19.1275 7.84146 19.9998 9.8181 19.9998 11.9985C19.9998 14.2047 19.1067 16.2024 17.6623 17.6496M6.39976 17.7116C4.91867 16.2597 3.99976 14.2364 3.99976 11.9985C3.99976 9.78644 4.89753 7.7841 6.34858 6.33594" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4276 8.83596C16.2764 9.6478 16.7997 10.7599 16.7997 11.9865C16.7997 13.2278 16.2639 14.3517 15.3972 15.1659M8.63971 15.2008C7.75105 14.3839 7.19971 13.2456 7.19971 11.9865C7.19971 10.742 7.73837 9.61552 8.609 8.80078" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12.0004" cy="11.9984" r="1.6" stroke="black" stroke-width="1.5"/>
</svg>

                            </div>
                            <div className='flex flex-col font-opensans'>
                         
                                <span className='text-white-shade-9 lg:text-lg'>Website</span>
                                <span className='text-black text-lg font-semibold lg:text-xl'>
                                byjason.com
                                </span>
                            </div>
                        </Link>
                    </div>
    </div>
  </div>
  )
}

export default Social