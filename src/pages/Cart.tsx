import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FaBook } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { clearCart, removeCard } from "../redux/Slices/CartSlice";
import { CartItem } from "../redux/Slices/types";
import { Link } from "react-router-dom";
import CartEmpty from "./CartEmpty";

const Cart: React.FC = () => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const onClickRemove = (obj: CartItem) => {
    dispatch(removeCard(obj.id));
  };
  const onClickClear = () => {
    dispatch(clearCart());
  };
  if (items.length == 0) {
    return <CartEmpty />;
  } else {
    return (
      <div className=" p-5">
        <h1 className=" text-center text-4xl text-indigo-500 font-bold">
          Черновик
        </h1>
        <div className=" grid xl:grid-cols-[repeat(5,1fr)] gap-x-5 gap-y-5 mt-5">
          {items.map((obj) => (
            <div className=" border-2 border-indigo-500 rounded-lg mb-3 px-2 pb-12 pt-2 w-2/3 xl:w-full mx-auto">
              <MdOutlineClear
                onClick={() => onClickRemove(obj)}
                className=" text-indigo-500 font-bold text-xl cursor-pointer float-right"
              />
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
        <div className=" flex items-center justify-center mt-4">
          <Link to="/main">
            <div className=" border-2 border-indigo-500 rounded-xl text-indigo-500 font-bold p-3 text-xl hover:text-white hover:bg-indigo-500 xl:mr-32 mr-10">
              Вернуться назад
            </div>
          </Link>
          <div
            onClick={() => onClickClear()}
            className=" border-2 border-indigo-500 rounded-xl text-indigo-500 font-bold p-3 text-xl cursor-pointer hover:text-white hover:bg-indigo-500 "
          >
            Очистить
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
