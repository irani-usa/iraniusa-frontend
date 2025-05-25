import { Button } from '@/components/Forms'
import OverlayMenu from '@/components/Layout/OverlayMenu'



const page = () => {
    return (
        <section className="container">
            <OverlayMenu />
            <div className='flex justify-center items-center py-20 flex-col w-full gap-2'>
                <div className='relative'>
                    <div className='bg-green/10 border border-green w-20 h-20 rounded-full flex items-center justify-center'>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5899 30.592C18.1099 30.592 17.6539 30.4 17.3179 30.064L10.5259 23.272C9.82991 22.576 9.82991 21.424 10.5259 20.728C11.2219 20.032 12.3739 20.032 13.0699 20.728L18.5899 26.248L30.9259 13.912C31.6219 13.216 32.7739 13.216 33.4699 13.912C34.1659 14.608 34.1659 15.76 33.4699 16.456L19.8619 30.064C19.5259 30.4 19.0699 30.592 18.5899 30.592Z" fill="#58BD7D" />
                        </svg>
                        <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 right-0'></span>
                    <span className='absolute w-[4px] h-[4px] rounded-full bg-green -top-2 right-5'></span>
                    <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 right-1/2'></span>
                    <span className='absolute w-[4px] h-[4px] rounded-full bg-green -top-2 left-5'></span>
                    <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 left-0'></span>
                    <span className='absolute w-[2px] h-[2px] rounded-full bg-green -top-6 right-4'></span>
                    <span className='absolute w-[4px] h-[4px] rounded-full bg-green -top-6 right-5/12'></span>
                    <span className='absolute w-[2px] h-[2px] rounded-full bg-green -top-6 left-4'></span>
                    </div>
                </div>
                <h1 className='lg:text-4xl text-xl font-semibold text-center lg:leading-[50px]'>
                Your Subscription is <br /> Now Active
                </h1>
                <p className='text-white-shade-8 text-center font-medium    '>your subscription is active till <span className='text-black'>10/28/12</span></p>
                <Button content='Go to your dashboard' classes="w-max py-1.5 px-4 text-sm mt-4 rounded-xl!"/>
            </div>
        </section>)
}

export default page