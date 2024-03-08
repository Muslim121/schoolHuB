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
          <div className=" xl:flex xl:items-center xl:justify-between xl:mx-6">
            <p className=" xl:text-left xl:ml-6 text-center text-4xl font-bold text-indigo-500 mt-3 ">
              История
            </p>
            <div className=" xl:block hidden mr-16">
              <Sort />
            </div>
          </div>
          <div>
            <Category />
          </div>
          <div className=" xl:hidden flex justify-center">
            <Sort />
          </div>
          <Card />
        </div>
      )}
    </div>
  );
};

export default History;
