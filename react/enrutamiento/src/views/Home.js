import React from "react";
import Advertisement from "../components/Advertisement/Advertisement";
import Main from "../components/Main/Main";
import Subcontent from "../components/SubContent/SubContent";

const Home = () => {
  return (
    <Main>
      <Subcontent />
      <Subcontent />
      <Subcontent />
      <Advertisement />
    </Main>
  );
};

export default Home;
