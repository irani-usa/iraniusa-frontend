import React from "react";
import Star from "../../About/Star";
import Card from "./Card";

const BlogExplore = () => {
  return (
    <section className="container my-32">
      <div className="w-full flex flex-col items-center mb-10">
        <div className="w-full flex items-center justify-center gap-x-2">
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
          <Star content={"Professional Blog Explore "} />
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="text-white-shade-11 mt-4 text-lg">
        New individuals and companies join our platform every month, let’s get to know them!
        </p>
      </div>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5 gap-y-12 '">
      <Card image={'/images/home/blogExplore/1.png'} title={'Exploring Shirez Canyon in the Heart of Zagros Mountains'}  description="Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains..." author={{name:"Anna Rosé" , img:"/images/home/blogExplore/Avatar.png"}}  publishTime="Posted just now" readTime={3}/>
      <Card image={'/images/home/blogExplore/2.png'} title={'Exploring Shirez Canyon in the Heart of Zagros Mountains'}  description="Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains..." author={{name:"Anna Rosé" , img:"/images/home/blogExplore/Avatar.png"}}  publishTime="Posted just now" readTime={3}/>
      <Card image={'/images/home/blogExplore/3.png'} title={'Exploring Shirez Canyon in the Heart of Zagros Mountains'}  description="Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains..." author={{name:"Anna Rosé" , img:"/images/home/blogExplore/Avatar.png"}}  publishTime="Posted just now" readTime={3}/>
      </div>
    </section>
  );
};

export default BlogExplore
