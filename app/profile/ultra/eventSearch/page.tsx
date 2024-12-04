import { CheckBox, Input } from '@/components/Forms'
import { PopularConcert, PopularSeminar } from '@/components/Pages/Events'
import HotelCard from '@/components/Pages/Home/Tours/card/HotelCard'



const page = () => {
    return (
        <>
            <div className="w-full lg:flex container lg:items-start gap-x-10 mt-10">
                <section className="px-5 lg:w-1/3 border border-white-shade-4 rounded-3xl">
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-xl font-bold'>Hotel Stars</h2>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CheckBox id="5Star" label='5 star'/>
                        <CheckBox id="4Star" label='4 star'/>
                        <CheckBox id="Less3" label='Less than 3 stars'/>
                        <CheckBox id="withOutStar" label='Hotels without stars'/>         
                    </div>
                </div>
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-lg font-bold'>Search hotel name or residence</h2>
                    <div className='mt-1'>
                       <Input id='search' inputType='text' placeHolder='Search here...' label='' iconComp={<></>} classes=''/>
                    </div>
                </div>
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-xl font-bold'>Hotel Stars</h2>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CheckBox id="5Star" label='5 star'/>
                        <CheckBox id="4Star" label='4 star'/>
                        <CheckBox id="Less3" label='Less than 3 stars'/>
                        <CheckBox id="withOutStar" label='Hotels without stars'/>         
                    </div>
                </div>
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-xl font-bold'>Hotel Stars</h2>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CheckBox id="5Star" label='5 star'/>
                        <CheckBox id="4Star" label='4 star'/>
                        <CheckBox id="Less3" label='Less than 3 stars'/>
                        <CheckBox id="withOutStar" label='Hotels without stars'/>         
                    </div>
                </div>
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-xl font-bold'>Hotel Stars</h2>
                    <div className='flex flex-col gap-2 mt-3'>
                      <input className='accent-blue' type="range" name="" id="" />    
                    </div>
                </div>
                <div className="my-5 border-b border-b-white-shade-4 py-3">
                    <h2 className='text-xl font-bold'>Hotel Stars</h2>
                    <div className='flex flex-col gap-2 mt-3'>
                        <CheckBox id="5Star" label='5 star'/>
                        <CheckBox id="4Star" label='4 star'/>
                        <CheckBox id="Less3" label='Less than 3 stars'/>
                        <CheckBox id="withOutStar" label='Hotels without stars'/>         
                    </div>
                </div>

                </section>
                <section className="lg:pr-5  w-full my-5">
                    <div className='w-full flex justify-between lg:flex-row flex-col gap-2'>
                        <h4 className='text-2xl font-bold lg:max-w-md'>
                            Showing 1 - 19 of results for “Restaurant” near Los Angles
                        </h4>
                        <div className="flex items-center gap-1">
                            <label htmlFor="HeadlineAct" className="w-1/2 text-sm font-medium "> Sort by:    </label>

                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className=" p-2 w-full rounded-lg border-white-shade-4 text-white-shade-11 sm:text-sm focus:border-none"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </div>
                    </div>

                    <div className="">
                    <div className='w-full flex flex-col gap-5 my-8 lg:hidden ' >
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'w-full'} background={'/images/events/Shadmehr.webp'} />
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'w-full'} background={'/images/events/Shadmehr.webp'} />
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'w-full'} background={'/images/events/Shadmehr.webp'} />
          <PopularConcert content={'Siavash ghomeyshi'} price={'$67'} concert={'Dumbarton concerts'} date={'11/7/16'} city={'Washington DC'} classes={'w-full'} background={'/images/events/Shadmehr.webp'} />

        </div>
        <div className='w-full  flex-col lg:grid lg:grid-cols-2 gap-5 my-8  hidden' >
        <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
            <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
             <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full"}
              background={"/images/events/Shadmehr.webp"}
            />
        </div>
        
             
                    </div>

                    <ol className="flex justify-center gap-1 text-xs font-medium">
                        <li>
                            <a
                                href="#"
                                className="inline-flex  w-10 h-10 items-center justify-center rounded-lg border border-white-shade-4 bg-white text-white-shade-8 rtl:rotate-180"
                            >
                                <span className="sr-only">Prev Page</span>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5469 11.9466L10.5469 7.79329L10.5469 4.05329C10.5469 3.41329 9.77354 3.09329 9.32021 3.54662L5.86688 6.99995C5.31354 7.55329 5.31354 8.45329 5.86688 9.00662L7.18021 10.32L9.32021 12.46C9.77354 12.9066 10.5469 12.5866 10.5469 11.9466Z" fill="black" />
                                </svg>

                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block  w-10 h-10 rounded-lg border border-white-shade-4 bg-white text-center leading-8 text-white-shade-8"
                            >
                                1
                            </a>
                        </li>

                        <li className="block  w-10 h-10 rounded-lg border-blue bg-blue text-center leading-8 text-white">
                            2
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block  w-10 h-10 rounded-lg border border-white-shade-4 bg-white text-center leading-8 text-white-shade-8"
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block  w-10 h-10 rounded-lg border border-white-shade-4 bg-white text-center leading-8 text-white-shade-8"
                            >
                                4
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="inline-flex  w-10 h-10 items-center justify-center rounded-lg border border-white-shade-4 bg-white text-white-shade-8 rtl:rotate-180"
                            >
                                <span className="sr-only">Next Page</span>
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.45312 4.05338L5.45312 8.20671L5.45312 11.9467C5.45312 12.5867 6.22646 12.9067 6.67979 12.4534L10.1331 9.00005C10.6865 8.44671 10.6865 7.54671 10.1331 6.99338L8.81979 5.68005L6.67979 3.54005C6.22646 3.09338 5.45312 3.41338 5.45312 4.05338Z" fill="black" />
                                </svg>

                            </a>
                        </li>
                    </ol>
                </section>


            </div>

        </>
    )
}

export default page