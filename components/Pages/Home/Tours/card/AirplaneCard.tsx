
import React from "react"

interface AirplaneCardProps {
    image: string,
    title: string,
    price: string,
    startTime: string,
    endTime: string,
    startPlace: string,
    endPlace: string,
    ticketCount: number,
    travelers: string,
    loadWeight:number,
}

const AirplaneCard: React.FC<AirplaneCardProps> = (props) => {
    return (
        <div className="relative top-0 left-0 w-full border-white-shade-4 border rounded-2xl hover:shadow-card transition-all duration-300 hover:z-50 hover:-top-5 hover:cursor-pointer min-h-[580px] text-black">
            <div className="w-full h-72 bg-cover rounded-t-2xl" style={{ backgroundImage: `url('${props.image}')` }}></div>
            <h4 className="text-black font-outfit font-bold mx-4 mt-6 mb-12 text-xl">
                {props.title}
            </h4>
            <div className="mx-10 border p-2 rounded-lg border-white-shade-4 mt-6 mb-12 flex justify-between items-center ">
                <div className="flex flex-col">
                    <span className="font-black">{props.startTime}</span>
                    <span>{props.startPlace}</span>
                </div>
                <svg width="158" height="17" viewBox="0 0 158 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.966621 6.22007C0.966621 6.07341 0.993287 5.92008 1.05329 5.78008C1.18662 5.46674 1.44662 5.22674 1.77329 5.12007L2.65329 4.82674C3.05329 4.69341 3.55329 4.81341 3.85329 5.10674L5.37329 6.62007C5.39329 6.64007 5.46662 6.66674 5.49995 6.66674L7.14662 6.66674L5.83329 3.62674C5.65995 3.22007 5.67995 2.80674 5.88662 2.49341C6.09329 2.18007 6.46662 1.99341 6.89995 1.99341L7.75995 1.99341C8.41329 1.99341 9.11329 2.46007 9.34662 3.05341L10.9066 6.66007L12.8 6.66007C13.6066 6.66007 14.5333 7.22674 14.9066 7.94674C15.08 8.29341 15.08 8.69341 14.9066 9.03341C14.5333 9.76007 13.6133 10.3267 12.8066 10.3267L10.9133 10.3267L9.35329 13.9534C9.09995 14.5467 8.41995 15.0001 7.75995 15.0001L6.89995 15.0001C6.45995 15.0001 6.09329 14.8201 5.88662 14.5001C5.67995 14.1801 5.65995 13.7734 5.82662 13.3667L7.13995 10.3267L5.49329 10.3267C5.46662 10.3267 5.39995 10.3534 5.37995 10.3734L3.85329 11.8934C3.55995 12.1867 3.04662 12.3067 2.65329 12.1734L1.77329 11.8801C1.44662 11.7667 1.18662 11.5267 1.05995 11.2067C0.933288 10.8934 0.94662 10.5467 1.09329 10.2467C1.11329 10.2134 1.13329 10.1801 1.15995 10.1467L2.46662 8.59341C2.51329 8.54007 2.50662 8.43341 2.46662 8.38674L1.15995 6.83341C1.13329 6.80674 1.11329 6.77341 1.09995 6.74007C1.00662 6.58007 0.966621 6.40007 0.966621 6.22007ZM8.23995 6.87341C8.23995 7.02674 8.19995 7.17341 8.11329 7.30007C7.95995 7.53341 7.69995 7.66674 7.39329 7.66674L5.49329 7.66674C5.20662 7.66674 4.86662 7.52674 4.66662 7.32674L3.14662 5.81341C3.11329 5.78674 3.01329 5.76007 2.97329 5.77341L2.08662 6.06674C2.01995 6.08674 1.99329 6.13341 1.97995 6.16007C1.97329 6.18007 1.95995 6.21341 1.97329 6.25341L3.23329 7.74674C3.59329 8.16674 3.59329 8.82674 3.23329 9.24674L1.97995 10.7334C1.97329 10.7801 1.97995 10.8134 1.98662 10.8334C1.99995 10.8601 2.02662 10.9134 2.09329 10.9334L2.97329 11.2267C3.01995 11.2401 3.11995 11.2134 3.14662 11.1867L4.66662 9.67341C4.85329 9.47341 5.19995 9.32674 5.49329 9.32674L7.39329 9.32674C7.69329 9.32674 7.95329 9.45341 8.10662 9.68007C8.25995 9.90674 8.27995 10.2001 8.15995 10.4801L6.74662 13.7601C6.70662 13.8601 6.70662 13.9267 6.71995 13.9467C6.73329 13.9667 6.79329 13.9934 6.89995 13.9934L7.75995 13.9934C8.01329 13.9934 8.33995 13.7801 8.43329 13.5534L10.04 9.83341C10.1666 9.54007 10.4866 9.33341 10.8066 9.33341L12.8066 9.33341C13.2466 9.33341 13.8133 8.98674 14.0133 8.58674C14.04 8.53341 14.04 8.46674 14.0133 8.40674C13.8133 8.02007 13.2333 7.66674 12.8 7.66674L10.8 7.66674C10.4866 7.66674 10.16 7.46007 10.0333 7.16674L8.42662 3.44674C8.33329 3.21341 8.00662 3.00007 7.75995 3.00007L6.89995 3.00007C6.79329 3.00007 6.73329 3.02674 6.71995 3.04674C6.70662 3.06674 6.70662 3.13341 6.74662 3.23341L8.15995 6.50674C8.21329 6.62674 8.23995 6.75341 8.23995 6.87341Z" fill="black" />
                    <line x1="24" y1="8" x2="134" y2="8" stroke="#E6E6E6" />
                    <circle cx="150" cy="8.5" r="7.5" stroke="#E6E6E6" />
                </svg>
                <div className="flex flex-col">
                <span className="font-black">{props.endTime}</span>
                    <span>{props.endPlace}</span>
                </div>
            </div>

            <div className="flex justify-between gap-y-3 font-opensans px-4 absolute w-full bottom-0  border-t border-t-white-shade-4 py-4 items-center">
                <div className="flex flex-col ">
                    <span className="font-semibold">{props.ticketCount} seats left</span>
                    <span className="text-white-shade-8">{props.travelers}</span>
                </div>
                <span className="font-bold text-xl">${props.price}</span>
            </div>

            <div className="absolute top-0 left-0 p-4 flex gap-2 item-center">
                <div className="bg-white/10 backdrop-blur-3xl text-white px-5 py-1 rounded-full">
                    {props.loadWeight}kg
                </div>
                <div className="bg-white/10 backdrop-blur-3xl text-white px-5 py-1 rounded-full">
                Charter
                </div>
                <div className="bg-white/10 backdrop-blur-3xl text-white px-5 py-1 rounded-full">
                Economy
                </div>
            </div>
        </div>
    )
}

export default AirplaneCard