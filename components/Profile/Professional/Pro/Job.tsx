import React from 'react'

const Job = () => {
    return (
        <div className=' w-full border-white-shade-4 border-b pb-8'>
            <div className='container flex flex-col gap-y-6 mt-8 lg:px-0'>
                <h1 className="text-[26px] font-outfit font-bold text-black lg:text-3xl">What is my job about?</h1>
                <div className="text-white-shade-9 font-opensans lg:max-w-lg flex flex-col gap-y-8">
                    <p >
                        Digital product designers work in a delicate space that straddles the line between programmer and artist, embracing aspects of both realms
                    </p>
                    <p >
                        How do I become a digital product designer?
                    </p>
                    <p>Becoming a digital product designer typically requires a strong portfolio or track record as a developer.</p>
                    <ol className='list-decimal pl-4'>
                        <li>   Web design and development.</li>
                        <li>Software/app design and development.</li>
                        <li>UX design.</li>
                        <li>Graphic design.</li>
                        <li>Prototyping.</li>
                        <li>
                            Written and verbal communication.</li>
                        <li>Personnel management.</li>
                    </ol>
                </div>
                <div className='w-full h-80 bg-cover bg-center rounded-3xl my-3 lg:h-64' style={{ backgroundImage: `url('/images/profile/desk.png')` }}>

                </div>
            </div>
        </div>
    )
}

export default Job