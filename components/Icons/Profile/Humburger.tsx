import React from 'react'

interface HumburgerIconProps {
    isactive?:boolean,
  }
  
const HumburgerIcon = (props:HumburgerIconProps) => {
  return (
<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3784 3.33398H7.62162C5.54192 3.33398 3.77395 4.97066 3.12746 7.25099C2.91462 8.00173 2.80819 8.37711 3.07555 8.77221C3.34291 9.16732 3.77815 9.16732 4.64862 9.16732H15.3514C16.2219 9.16732 16.6571 9.16732 16.9245 8.77221C17.1918 8.37711 17.0854 8.00173 16.8726 7.25099C16.2261 4.97066 14.4581 3.33398 12.3784 3.33398Z" stroke={props.isactive ? "#fff" : "#999999"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.99967 12.5013H4.64828C3.77781 12.5013 3.34258 12.5013 3.07522 12.7835C2.80786 13.0657 2.91428 13.3339 3.12712 13.8701C3.77361 15.4989 5.54159 16.668 7.62128 16.668H12.3781C14.4578 16.668 16.2257 15.4989 16.8722 13.8701C17.0851 13.3339 17.1915 13.0657 16.9241 12.7835C16.6568 12.5013 16.2215 12.5013 15.3511 12.5013H11.6663" stroke={props.isactive ? "#fff" : "#999999"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8332 12.5013H16.6665C17.587 12.5013 18.3332 11.7551 18.3332 10.8346C18.3332 9.91416 17.587 9.16797 16.6665 9.16797H9.99984M4.1665 12.5013H3.33317C2.4127 12.5013 1.6665 11.7551 1.6665 10.8346C1.6665 9.91416 2.4127 9.16797 3.33317 9.16797H4.99984M4.99984 9.16797L6.23441 10.6083C6.82251 11.2944 7.11656 11.6375 7.49984 11.6375C7.88312 11.6375 8.17717 11.2944 8.76526 10.6083L9.99984 9.16797M4.99984 9.16797H9.99984" stroke={props.isactive ? "#fff" : "#999999"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.50635 6.66797L7.49886 6.66797" stroke={props.isactive ? "#fff" : "#999999"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4998 5.83398L11.6665 6.66732" stroke={props.isactive ? "#fff" : "#999999"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  )
}

export default HumburgerIcon