import React from "react";
import { useParams } from "react-router-dom";
import Main from "../components/Main/Main";
import Subcontent from "../components/SubContent/SubContent";

const Beta = (props) => {
  //   const { numero } = props;
  const { numero } = useParams();

  return (
    <Main>
      <Subcontent numero={numero} />
      <Subcontent numero={numero} />
    </Main>
  );
};

export default Beta;
