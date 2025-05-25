
import React from "react";
import Header from "./Header";

interface MainProps {
  insideElement: React.ReactNode;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <section className="flex flex-col w-4/5 max-h-screen ">
      <Header />
      <main className="bg-white-shade-2 p-4 h-full overflow-hidden">
        {props.insideElement}
      </main>
    </section>
  );
};

export default Main;
