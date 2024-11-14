import { Button } from '@/components/Forms'
import OverlayMenu from '@/components/Layout/OverlayMenu'



const page = () => {
    return (
        <section className="container">
            <OverlayMenu />
            <div className='flex justify-center items-center py-20 flex-col w-full gap-2'>
                <div className='relative'>
                    <div className='bg-[#FF5959]/10 border border-[#FF5959] w-20 h-20 rounded-full flex items-center justify-center'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.1879 27.955L12.0458 13.8128C11.5626 13.3297 11.5626 12.5283 12.0458 12.0451C12.529 11.5619 13.3304 11.5619 13.8136 12.0451L27.9557 26.1872C28.4389 26.6704 28.4389 27.4718 27.9557 27.955C27.4725 28.4382 26.6711 28.4382 26.1879 27.955Z" fill="#FF5959" />
                            <path d="M12.0443 27.9551C11.5611 27.4719 11.5611 26.6705 12.0443 26.1873L26.1864 12.0452C26.6696 11.562 27.471 11.562 27.9542 12.0452C28.4374 12.5284 28.4374 13.3298 27.9542 13.813L13.8121 27.9551C13.3289 28.4383 12.5275 28.4383 12.0443 27.9551Z" fill="#FF5959" />
                        </svg>

                        <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 right-0'></span>
                        <span className='absolute w-[4px] h-[4px] rounded-full bg-[#FF5959] -top-2 right-5'></span>
                        <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 right-1/2'></span>
                        <span className='absolute w-[4px] h-[4px] rounded-full bg-[#FF5959] -top-2 left-5'></span>
                        <span className='absolute w-[2px] h-[2px] rounded-full bg-black/20 -top-3 left-0'></span>
                        <span className='absolute w-[2px] h-[2px] rounded-full bg-[#FF5959] -top-6 right-4'></span>
                        <span className='absolute w-[4px] h-[4px] rounded-full bg-[#FF5959] -top-6 right-5/12'></span>
                        <span className='absolute w-[2px] h-[2px] rounded-full bg-[#FF5959] -top-6 left-4'></span>
                    </div>
                </div>
                <h1 className='lg:text-4xl text-xl font-semibold text-center lg:leading-[50px]'>
                Oops! Your Payment <br /> Didn't Go Through
                </h1>
                <p className='text-white-shade-8 text-center font-medium    '>yTry using a different payment method or make another payment</p>
                <Button content='Go back to checkout' classes="w-max py-1.5 px-4 text-sm mt-4 !rounded-xl" />
            </div>
        </section>)
}

export default page