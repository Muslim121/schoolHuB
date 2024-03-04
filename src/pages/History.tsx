import React from "react";
import Asside from "../components/Asside";
import axios from "axios";
import Category from "../components/Category";
import Sort from "../components/Sort";
import Card from "../components/Card";

const History: React.FC = () => {
  return (
    <div className=" flex">
      <Asside />
      <p className=" w-full text-center text-3xl font-bold text-indigo-500 mt-3">
        История
      </p>
      <div className=" flex items-center">
        <Category />
        <Sort />
      </div>
      <Card />
    </div>
  );
};

export default History;
