import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";

const Home = () => {
  return (
    <div className="">
      <section className="banner z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Zosh Food</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste The Convenience: Food, Fast and Delivered
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10"></p>
        <MultiItemCarousel />
      </section>
    </div>
  );
};

export default Home;
