import React, { useRef, useState } from "react";
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
  const SortLi = useRef<HTMLDivElement>(null);

  const OnSelectedSort = (obj: SortObj) => {
    setOpenSort(false);
    dispatch(setSort(obj));
  };
  const handleclick = (event: MouseEvent) => {
    if (SortLi.current && !SortLi.current.contains(event.target as Node)) {
      setOpenSort(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleclick);
  }, []);
  return (
    <div className=" flex items-center">
      <p>Сортировка по: </p>
      <span
        onClick={() => setOpenSort(!openSort)}
        className=" mx-2 cursor-pointer text-indigo-500"
      >
        {sortingRedux.name}
      </span>
      <div ref={SortLi} className=" relative">
        {openSort && (
          <div className=" absolute cursor-pointer right-1 top-7 bg-white border-[3px] border-indigo-500 rounded-2xl shadow-xl">
            {SortItems.map((obj, i) => (
              <li
                key={i}
                onClick={() => OnSelectedSort(obj)}
                className={`p-2 w-44 hover:bg-slate-200 rounded-xl ${
                  sortingRedux.name === obj.name ? `bg-slate-200` : `bg-white`
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
