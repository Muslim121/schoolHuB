import React from "react";
import Asside from "../components/Asside";
import Notfound from "../components/Notfound";
import { useAppSelector } from "../redux/hooks";

const Biology: React.FC = () => {
  const openValue = useAppSelector((state) => state.open.openValue);

  return (
    <div className=" flex ">
      <Asside />
      {openValue && (
        <div className=" mx-auto mt-2">
          <Notfound />
        </div>
      )}
    </div>
  );
};

export default Biology;
