import React from "react";

const Content = ({ content, activo }) => {
  if (!activo) return null;
  return <div>{content}</div>;
};

export default Content;
