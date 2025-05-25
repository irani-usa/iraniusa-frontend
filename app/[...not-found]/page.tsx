'use client'
 
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <section className="container flex flex-col gap-y-14  lg:items-center lg:justify-between lg:mt-12">
      <div className="mt-8 flex flex-col items-start lg:items-center">
        <span className="text-black text-lg font-inter px-6 py-3 border-[1px] border-white-shade-4 rounded-full font-semibold">
          Page not found
        </span>
        <h1 className="text-5xl font-outfit mt-9 text-black font-semibold lg:text-6xl">
          Oh NO! Error 404
        </h1>
        <p className="text-white-shade-10 font-inter font-medium text-sm mt-5 mb-8">
          Maybe Irani Usa has broken this page.  Come back to the homepage
        </p>
        <button
          className="text-white text-xl font-semibold bg-blue py-5  px-10 font-inter rounded-2xl"
          onClick={() => router.back()}
        >
          Go back
        </button>       
      </div>
      <img className="w-full lg:w-1/2" src="/images/404/404.webp" alt="" />
    </section>
  );
}
