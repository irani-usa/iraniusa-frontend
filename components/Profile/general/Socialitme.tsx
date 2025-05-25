import Link from 'next/link'
import React from 'react'

interface SocialitmeProps {
    icon: React.ReactNode,
}


const Socialitme: React.FC<SocialitmeProps> = (props) => {
  return (
    <Link href={"#"} className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-xl ">
        {props.icon}
    </Link>
  )
}

export default Socialitme