
import { Earth, Oven, StarTour, Swim, Wifi } from "@/components/Icons/Outline"
import YellowStar from "@/components/Icons/Solid/YellowStar"
import React from "react"

interface HotelCardProps {
    image: string,
    title: string,
    price: string,
    score: number,
    off: number,
    days: string,
    Star: boolean,
    Oven: boolean,
    Wifi: boolean,
    Earth: boolean,
    Swim: boolean,
}

const HotelCard: React.FC<HotelCardProps> = (props) => {
    return (
        <div className="relative top-0 left-0 w-full border-white-shade-4 border rounded-2xl hover:shadow-card transition-all duration-300 hover:z-50 hover:-top-5 hover:cursor-pointer min-h-[580px] text-black">
            <div className="w-full h-60 bg-cover rounded-t-2xl" style={{ backgroundImage: `url('${props.image}')` }}></div>
            <h4 className="text-black font-outfit font-bold mx-4 mt-6 mb-12 text-xl">
                {props.title}
            </h4>
            <div className="mx-10 border px-4 p-2 rounded-lg border-white-shade-4 mt-6 flex flex-col lg:flex-row flex-wrap gap-2 justify-between items-start ">
                {props.Star &&
                    <div className="flex items-center gap-1">
                        <StarTour />
                        5 star
                    </div>}
                {props.Oven &&
                    <div className="flex items-center gap-1">
                        <Oven />
                        Restaurant
                    </div>}
                {props.Wifi && <div className="flex items-center gap-1">
                    <Wifi />
                    Free Wifi
                </div>}
                {props.Earth && <div className="flex items-center gap-1">
                    <Earth />
                    Istanbul - shishli
                </div>}
                {props.Swim && <div className="flex items-center gap-1">
                    <Swim />
                    Swimming pool
                </div>}
            </div>

            <div className="flex justify-between gap-y-3 font-opensans px-4 absolute w-full bottom-0 border-t border-t-white-shade-4 py-4 items-center">
                <div className="flex flex-col ">
                    <span className="font-semibold">${props.off} discount <span className="text-white-shade-8">when checking in</span></span>
                    <span className="text-white-shade-8">{props.days}</span>
                </div>
                <span className="font-bold text-xl">${props.price}</span>
            </div>

            <div className="absolute top-0 left-0 p-4 flex gap-2 item-center">
                <div className="flex gap-1 items-center  bg-white/10 backdrop-blur-3xl text-white px-3 py-1 rounded-full">
                    <YellowStar /> {props.score}
                </div>

            </div>
        </div>
    )
}

export default HotelCard