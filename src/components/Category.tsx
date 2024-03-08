import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setIndexValue } from "../redux/Slices/FilterSlice";

const Category: React.FC = () => {
  const dispatch = useAppDispatch();
  const indexValue = useAppSelector((state) => state.filter.indexValue);

  const categories: string[] = [
    "Все",
    "Петр 1",
    "Екатерина 2",
    "Войны",
    "Правители",
    "Прочее",
  ];

  return (
    <div className=" flex items-center overflow-x-scroll w-72 xl:overflow-visible m-6 ">
      {categories.map((category, i) => (
        <div
          key={i}
          onClick={() => dispatch(setIndexValue(i))}
          className={` border-[3px] rounded-2xl p-3 mr-3 text-xl font-bold  cursor-pointer min-w-40 hover:text-white hover:bg-indigo-500 ${
            indexValue === i
              ? `text-white bg-indigo-500`
              : `border-indigo-500 text-blue-500`
          }`}
        >
          <div className=" text-center">{category}</div>
        </div>
      ))}
    </div>
  );
};

export default Category;
