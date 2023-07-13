
import React from 'react'

interface SeparatorProps {
    classes: string
}

const Separator:React.FC<SeparatorProps>= (props) => {
    return (
        <svg className={props.classes} width="321" height="24" viewBox="0 0 321 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="11.5" x2="129.5" y2="11.5" stroke="#D9D9D9" />
            <path d="M166.56 22.16H154.44C152.49 22.16 151 21.45 150.24 20.17C149.49 18.89 149.59 17.24 150.54 15.54L156.6 4.63003C157.6 2.83003 158.98 1.84003 160.5 1.84003C162.02 1.84003 163.4 2.83003 164.4 4.63003L170.46 15.54C171.41 17.25 171.52 18.89 170.76 20.17C170 21.45 168.51 22.16 166.56 22.16ZM160.5 3.34003C159.56 3.34003 158.64 4.06003 157.91 5.36003L151.86 16.27C151.18 17.49 151.07 18.61 151.54 19.42C152.01 20.22 153.05 20.67 154.45 20.67H166.57C167.97 20.67 169 20.23 169.48 19.42C169.95 18.61 169.84 17.5 169.16 16.27L163.09 5.36003C162.36 4.06003 161.44 3.34003 160.5 3.34003Z" fill="black" />
            <path d="M169.94 20.75C169.79 20.75 169.64 20.71 169.51 20.61L160.5 14.3L151.49 20.61C151.15 20.85 150.68 20.77 150.45 20.43C150.21 20.09 150.29 19.62 150.63 19.39L160.07 12.78C160.33 12.6 160.67 12.6 160.93 12.78L170.37 19.39C170.71 19.63 170.79 20.1 170.55 20.43C170.41 20.64 170.18 20.75 169.94 20.75Z" fill="black" />
            <path d="M160.5 14.14C160.09 14.14 159.75 13.8 159.75 13.39V3C159.75 2.59 160.09 2.25 160.5 2.25C160.91 2.25 161.25 2.59 161.25 3V13.39C161.25 13.8 160.91 14.14 160.5 14.14Z" fill="black" />
            <line x1="191.5" y1="11.5" x2="320.5" y2="11.5" stroke="#D9D9D9" />
        </svg>
    )
}

export default Separator