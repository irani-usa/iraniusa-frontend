import React from 'react'

const Platform = () => {
    return (
        <section className='w-full pb-8'>
            <div className='container mt-5 lg:px-2'>
                <section className='relative bg-black w-full py-3 px-4 rounded-3xl flex flex-col items-center gap-y-9 lg:flex-row lg:py-7 lg:pl-12 lg:pr-2 lg:justify-between'>
                    <div className='flex items-center justify-center gap-x-3 lg:gap-x-5'>
                        <div className='bg-white-shade-20 p-6  flex items-center justify-center rounded-full '><svg width="26" height="26" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.9234 3.63732C24.6352 2.55583 23.7862 1.7042 22.708 1.41516C20.7538 0.889883 12.9177 0.889883 12.9177 0.889883C12.9177 0.889883 5.08155 0.889883 3.12733 1.41516C2.04919 1.7042 1.20003 2.55583 0.911879 3.63732C0.388245 5.59745 0.388245 9.68713 0.388245 9.68713C0.388245 9.68713 0.388245 13.7768 0.911879 15.7371C1.20003 16.8184 2.04919 17.6701 3.12733 17.9592C5.08155 18.4844 12.9177 18.4844 12.9177 18.4844C12.9177 18.4844 20.7538 18.4844 22.708 17.9592C23.7862 17.6701 24.6352 16.8184 24.9234 15.7371C25.4471 13.7768 25.4471 9.68713 25.4471 9.68713C25.4471 9.68713 25.4471 5.59745 24.9234 3.63732Z" fill="white" />
                            <path d="M10.3547 13.3984L16.9041 9.6855L10.3547 5.97221L10.3547 13.3984Z" fill="black" />
                        </svg>
                        </div>
                        <div className='bg-white-shade-20 p-6  flex items-center justify-center rounded-full '><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4583 9.64868L12.4583 18.1374L21.6047 18.1374C23.5363 18.0016 24.403 16.8113 24.403 15.3496C24.403 13.8043 23.2335 12.5618 21.6674 12.5618C21.2706 12.5618 20.9365 12.6453 20.5919 12.7915C20.3413 10.3482 18.2635 8.4375 15.7055 8.4375C14.4838 8.4375 13.3249 8.89691 12.4583 9.64868ZM11.5394 10.7137C11.2262 10.5257 10.8921 10.3796 10.5266 10.3065L10.5266 18.1374H11.978L11.978 10.1394C11.8213 10.3065 11.6752 10.5153 11.5394 10.7137ZM9.08575 10.1499L9.08575 18.1374H10.0463L10.0463 10.1812C9.84796 10.1499 9.64958 10.1394 9.44075 10.1394C9.31546 10.1394 9.20061 10.1394 9.08575 10.1499ZM7.17502 10.8285L7.17502 18.1374H8.12517L8.12517 10.3482C7.78061 10.4631 7.45693 10.6301 7.17502 10.8285ZM5.43134 13.4388C5.3687 13.4388 5.30605 13.3762 5.23296 13.3449L5.23296 18.1374H6.19355L6.19355 11.7265C5.80723 12.2276 5.5462 12.8228 5.43134 13.4388ZM3.30134 13.1465L3.30134 18.0434C3.52061 18.106 3.7712 18.1374 4.04267 18.1374H4.27237L4.27237 13.0629C4.18884 13.0525 4.10531 13.0421 4.04267 13.0421C3.7712 13.0421 3.52061 13.0838 3.30134 13.1465ZM1.43237 15.5897C1.43237 16.3728 1.78737 17.0619 2.34076 17.5318L2.34076 13.6581C1.78737 14.1175 1.43237 14.8171 1.43237 15.5897Z" fill="white" />
                        </svg>

                        </div>
                        <div className='bg-white-shade-20 p-6 flex items-center justify-center rounded-full '><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9187 0.640625C5.17607 0.640625 0.477539 5.33915 0.477539 11.0818C0.477539 16.8244 5.17607 21.523 10.9187 21.523C16.6614 21.523 21.3599 16.8244 21.3599 11.0818C21.3599 5.33915 16.7136 0.640625 10.9187 0.640625ZM14.8342 15.9369C12.3805 14.423 9.30033 14.1097 5.64592 14.945C5.28048 15.0494 4.96725 14.7884 4.86283 14.4752C4.75842 14.1097 5.01945 13.7965 5.33269 13.6921C9.30033 12.8046 12.7459 13.17 15.4606 14.8406C15.8261 14.9972 15.8783 15.4149 15.7217 15.7281C15.5128 16.0414 15.1474 16.1458 14.8342 15.9369ZM15.8783 13.1178C13.0592 11.395 8.77827 10.873 5.4893 11.9171C5.07166 12.0215 4.6018 11.8127 4.49739 11.395C4.39298 10.9774 4.6018 10.5075 5.01945 10.4031C8.83048 9.2546 13.529 9.82886 16.7658 11.8127C17.079 11.9693 17.2356 12.4914 16.9746 12.8568C16.7136 13.2222 16.2437 13.3789 15.8783 13.1178ZM4.9662 8.73254C4.44414 8.88915 3.92208 8.57592 3.76547 8.10607C3.60885 7.58401 3.92208 7.06195 4.39194 6.90533C8.09855 5.80901 14.2066 6.01783 18.0699 8.31489C18.5397 8.57592 18.6964 9.20239 18.4353 9.67224C18.1743 10.0377 17.5478 10.1943 17.078 9.93327C13.7368 7.94945 8.15076 7.74063 4.9662 8.73254Z" fill="white" />
                        </svg>

                        </div>
                        <div className='bg-white-shade-20 p-6   flex items-center justify-center rounded-full '><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5302 7.91328C17.0247 8.84193 16.0948 10.4339 16.0948 12.2028C16.0948 14.1927 17.2903 16.0058 19.1058 16.7576C18.7516 17.9073 18.2202 18.9686 17.556 19.9415C16.5818 21.3124 15.5634 22.7275 14.0578 22.7275C12.5523 22.7275 12.1095 21.843 10.3383 21.843C8.61133 21.843 7.9914 22.7717 6.57442 22.7717C5.15743 22.7717 4.18326 21.4893 3.07624 19.8973C1.61498 17.6862 0.773651 15.1214 0.72937 12.4239C0.72937 8.04595 3.56333 5.70221 6.39729 5.70221C7.90284 5.70221 9.14269 6.67508 10.0726 6.67508C10.9582 6.67508 12.3752 5.65799 14.0578 5.65799C15.8291 5.61377 17.5117 6.45397 18.5302 7.91328ZM13.2608 3.80069C14.0136 2.91626 14.4121 1.81072 14.4564 0.660965C14.4564 0.5283 14.4564 0.351414 14.4121 0.21875C13.128 0.351414 11.9324 0.970515 11.091 1.94339C10.3383 2.78359 9.89546 3.84491 9.85118 4.99467C9.85118 5.12733 9.85118 5.26 9.89546 5.39266C9.98403 5.39266 10.1169 5.43688 10.2054 5.43688C11.401 5.34844 12.508 4.72934 13.2608 3.80069Z" fill="white" />
                        </svg>

                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 items-center justify-center gap-6   lg:flex">
              <div className="flex flex-col items-center gap-x-3 lg:gap-y-2">
                <h1 className="text-white text-3xl font-bold lg:text-4xl">200+</h1>
                <span className="text-white-shade-9 text-center">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center gap-x-3 lg:gap-y-2">
                <h1 className="text-white text-3xl font-bold lg:text-4xl">100k+</h1>
                <span className="text-white-shade-9  text-center">Varients</span>
              </div>
              <div className="flex flex-col items-center gap-x-3 col-span-2 lg:gap-y-2">
                <h1 className="text-white text-3xl font-bold lg:text-4xl">92%</h1>
                <span className="text-white-shade-9  text-center">Satisfied Customers</span>
              </div>
            </div>
                    <div className='w-36 py-[2px] bg-white rounded-2xl lg:w-1 lg:py-16'>
            
                    </div>
                    <svg className='absolute bottom-0 lg:right-0 ' width="343" height="149" viewBox="0 0 343 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1336_10035)">
<ellipse cx="171.25" cy="137.5" rx="103.25" ry="29.5" fill="white" fill-opacity="0.26"/>
</g>
<defs>
<filter id="filter0_f_1336_10035" x="-39.1316" y="0.868423" width="420.763" height="273.263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="53.5658" result="effect1_foregroundBlur_1336_10035"/>
</filter>
</defs>
</svg>

                </section>
                
            </div>
        </section>
    )
}

export default Platform