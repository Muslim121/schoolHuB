import React from "react";
import { useAppSelector } from "../redux/hooks";
import { FaBook } from "react-icons/fa";

const Cart: React.FC = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className=" p-5">
      <h1 className=" text-center text-4xl text-indigo-500 font-bold">
        Черновик
      </h1>
      <div className=" grid xl:grid-cols-[repeat(5,1fr)] grid-rows-[repeat(5,1fr)] gap-x-5 gap-y-5 mt-5">
        {items.map((obj) => (
          <div className=" border-2 border-indigo-500 rounded-lg mb-3 p-4 w-2/3 mx-auto">
            <div className=" flex items-center text-indigo-500 text-3xl font-bold justify-center">
              <FaBook />
              <h1>Lesson</h1>
            </div>
            <h1 className=" text-indigo-500 text-xl font-bold text-center mt-2">
              {obj.title}
            </h1>
            <h1 className=" text-xl text-center mt-2">{obj.event}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
