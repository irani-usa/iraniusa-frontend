import BlogCardM from "@/components/Pages/Blog/BlogCardM";
import React from "react";
import Arrowbtn from "../../general/Arrowbtn";

interface BlogProps {
  desc:string,
}


const Blog: React.FC<BlogProps> = (props) => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8">
      <div className="container flex flex-col gap-y-6 mt-8 lg:px-0">
        <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl">
          My Blog
        </h1>
        <p className="text-center text-lg text-white-shade-9  font-opensans">
       {props.desc}
        </p>

        <BlogCardM
          classes={"lg:w-[43%]"}
          readingTime={"3 min read"}
          title={"Dynamic blog card"}
          summery={"is simply dummy text of the printing and typesetting industry. Lorem Ip"}
          author={"pouya zohrehvand"}
          publish={"3 min ago"}
          avatar={"/images/blog/User.webp"}
          cover={"/images/blog/UsaFlag.webp"}
          info={false}
          isview={true}
          view={"32"}
          like={"56k"}
          cm={"435k"}
        />

       <Arrowbtn />
      </div>
    </div>
  );
};

export default Blog;
