import React from "react";
import Asside from "../components/Asside";
import Category from "../components/Category";
import Sort from "../components/Sort";
import Card from "../components/Card";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const History: React.FC = () => {
  const openValue = useAppSelector((state: RootState) => state.open.openValue);

  return (
    <div className=" flex">
      <Asside />
      {openValue && (
        <div className=" w-full">
          <p className=" text-center text-4xl font-bold text-indigo-500 mt-3">
            История
          </p>
          <Card />
          <div className=" flex items-center">
            <Category />
            <Sort />
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
