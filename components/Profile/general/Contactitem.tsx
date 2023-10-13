import React from 'react'

import Link from 'next/link'

interface ContactitemProps {
    title: string,
    content: string,
    icon: React.ReactNode,
}


const Contactitem: React.FC<ContactitemProps> = (props) => {
    return (
        <Link className="flex items-center gap-x-4" href={"#"}>
            <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
                {props.icon}
            </div>
            <div className="flex flex-col font-opensans">
                <span className="text-white-shade-9 lg:text-lg">{props.title}</span>
                <span className="text-black text-lg font-semibold lg:text-xl">
                    {props.content}
                </span>
            </div>
        </Link>
    )
}

export default Contactitem