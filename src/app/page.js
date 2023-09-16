import React from "react";
import Herosection from "./components/Herosection";
import Movie from "./movie/page";

const page = () => {
  return (
    <>
      <Herosection
        title={"LET'S WATCH MOVIE TOGETHER"}
        imageUrl={"/about1.svg"}
      />
      <Movie />
    </>
  );
};

export default page;
