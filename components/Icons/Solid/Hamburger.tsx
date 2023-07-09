
import React from 'react'

interface HamburgerProps {
    classes:string
}

const Hamburger:React.FC<HamburgerProps> = (props) => {
    return (
        <svg className={props.classes} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V5C3 5.55228 3.44772 6 4 6H20C20.5523 6 21 5.55228 21 5V5ZM21 12C21 11.4477 20.5523 11 20 11H10C9.44772 11 9 11.4477 9 12V12C9 12.5523 9.44772 13 10 13H20C20.5523 13 21 12.5523 21 12V12ZM21 19C21 18.4477 20.5523 18 20 18H4C3.44772 18 3 18.4477 3 19V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V19Z" fill="black" />
        </svg>
    )
}

export default Hamburger