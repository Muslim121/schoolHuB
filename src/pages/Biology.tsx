import React from "react";
import Asside from "../components/Asside";
import Notfound from "../components/Notfound";

const Biology: React.FC = () => {
  return (
    <div className=" flex ">
      <Asside />
      <div className=" mx-auto mt-2">
        <Notfound />
      </div>
    </div>
  );
};

export default Biology;
