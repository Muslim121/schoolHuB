import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSort } from "../redux/Slices/FilterSlice";
type SortObj = {
  name: string;
  sortProperty: string;
};

export const SortItems: SortObj[] = [
  { name: "популярности DESC", sortProperty: "rating" },
  { name: "популярности ASC", sortProperty: "-rating" },
  { name: "хронологии DESC", sortProperty: "hronology" },
  { name: "хронологии ASC", sortProperty: "-hronology" },
  { name: "алфавиту DESC", sortProperty: "event" },
  { name: "алфавиту ASC", sortProperty: "-event" },
];

const Sort: React.FC = () => {
  const sortingRedux = useAppSelector((state) => state.filter.sortRedux);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const OnSelectedSort = (obj: SortObj) => {
    setOpenSort(false);
    dispatch(setSort(obj));
  };

  return (
    <div className=" flex items-center">
      <p>Сортировка по: </p>
      <span
        onClick={() => setOpenSort(!openSort)}
        className=" mx-2 cursor-pointer text-indigo-500"
      >
        {sortingRedux.name}
      </span>
      <div className=" relative">
        {openSort && (
          <div className=" absolute cursor-pointer right-1 top-7 bg-white rounded-lg shadow-xl">
            {SortItems.map((obj, i) => (
              <li
                key={i}
                onClick={() => OnSelectedSort(obj)}
                className={`border-indigo-500 p-2 rounded-lg border-[3px] w-44 hover:text-white hover:bg-indigo-500 ${
                  sortingRedux.name === obj.name
                    ? `bg-indigo-500 text-white`
                    : `bg-white`
                }`}
              >
                {obj.name}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
