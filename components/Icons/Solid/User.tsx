
import React from 'react'

interface UserProps {
    classes:string
}

const User:React.FC<UserProps> = (props) => {
    return (
        <svg className={props.classes} width="30" height="26" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5734 10C12.8746 10 14.7401 8.13454 14.7401 5.83335C14.7401 3.53217 12.8746 1.66669 10.5734 1.66669C8.27222 1.66669 6.40674 3.53217 6.40674 5.83335C6.40674 8.13454 8.27222 10 10.5734 10Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.7317 18.3333C17.7317 15.1083 14.5234 12.5 10.5734 12.5C6.62337 12.5 3.41504 15.1083 3.41504 18.3333" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default User