
import React from "react"

interface AirplaneCardProps {
    image: string,
    title: string,
    description:string,
    author:{
        name:string,
        img:string;
    }
    publishTime :string,
    readTime:number,
}

const AirplaneCard: React.FC<AirplaneCardProps> = (props) => {
    return (
        <div className="relative top-0 left-0 w-full border-white-shade-4 border rounded-2xl hover:shadow-card transition-all duration-300 hover:z-50 hover:-top-5 hover:cursor-pointer h-[115%]">
            <div className="w-full h-72 bg-cover rounded-t-2xl" style={{ backgroundImage: `url('${props.image}')` }}></div>
            <h4 className="text-black font-outfit font-bold mx-4 mt-6 mb-12 text-xl">
                {props.title}
            </h4>
            <div className="mx-4  text-shade mt-6 mb-12 flex justify-between items-center ">
                {props.description}
            </div>

            <div className="flex justify-between gap-y-3 font-opensans px-4 static lg:absolute w-full bottom-0  border-t border-t-white-shade-4 py-4 items-center">
                <div className="flex items-center gap-2 ">
                    <img className="w-10 h-10 rounded-full" src={props.author.img} alt="" />
                    <div className="flex flex-col">
                        <span className="font-bold">{props.author.name}</span>
                        <span className="text-white-shade-8">{props.publishTime}</span>
                    </div>
                </div>
                <span className="font-bold text-lg">{props.readTime} min read</span>
            </div>

           
        </div>
    )
}

export default AirplaneCard