import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='w-full h-[150vh] bg-cover bg-center' style={{ backgroundImage: `url('/images/dashboard/bg.webp')` }}>
      <div className='container flex flex-col items-center justify-center gap-y-5 h-[150vh]'>
      <svg width="42" height="60" viewBox="0 0 42 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31.649 24.9371C33.7919 22.2348 35.2873 19.087 36.0226 15.7305L41.0235 16.8022C40.1243 20.9067 38.2957 24.756 35.6753 28.0605C33.0549 31.3651 29.7109 34.0388 25.8949 35.8805C23.5024 37.0352 20.9635 37.844 18.3558 38.2891L22.0993 52.1076C22.547 53.7602 24.2644 54.7409 25.9352 54.2981C27.606 53.8553 28.5976 52.1566 28.1499 50.5041L26.9431 46.0496C26.941 46.0501 26.9388 46.0507 26.9366 46.0512L26.7903 45.4854L25.9122 42.244L25.9493 42.2341L25.6684 41.1481C29.0854 40.2835 32.255 38.6519 34.9315 36.3801L38.2639 40.2207C36.2981 41.8894 34.1147 43.2755 31.779 44.3456L33.0925 49.1942C34.2716 53.5466 31.6601 58.0204 27.2596 59.1867C22.859 60.3529 18.3358 57.77 17.1567 53.4175L13.167 38.6905C9.08438 38.631 5.06187 37.6914 1.38086 35.9351L3.60413 31.3767C6.73155 32.8689 10.1604 33.6401 13.6327 33.6324C17.105 33.6247 20.5303 32.8382 23.6509 31.3321C26.7715 29.826 29.5061 27.6395 31.649 24.9371Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0477 9.45311L13.3945 13.8855L9.18179 15.4726L13.2162 17.5163L13.429 22.0205L16.5574 18.8194L20.8673 20.0274L18.7995 16.0203L21.2715 12.2331L16.8296 12.9651L14.0477 9.45311ZM9.46348 10.7169L10.4768 3.8412L14.3344 2.80756L18.6497 8.25546L25.4415 7.13627L27.617 10.472L23.828 16.2767L27.0256 22.4733L24.5052 25.5657L17.8665 23.705L13.0476 28.6358L9.31866 27.2179L8.98958 20.2527L2.80587 17.1201L3.02205 13.1435L9.46348 10.7169Z" fill="white"/>
</svg>
<h1 className='text-white text-center font-semibold text-3xl mt-6'>Optimize Your Viewing <br /> Experience</h1>
<p className="text-center text-white-shade-9  font-opensans text-[17px]">Thank you for visiting our website! we  recommend using a Mac or Windows device.</p>
<Link className='text-black bg-white px-24 py-5 text-lg font-medium rounded-xl mt-6' href={'/'}>Back to home</Link>
      </div>
    </section>
  )
}

export default page