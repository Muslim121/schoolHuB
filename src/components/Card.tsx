import axios from "axios";
import React from "react";
import { LuSwords } from "react-icons/lu";
import { useAppSelector } from "../redux/hooks";

type Dates = {
  id: number;
  title: string;
  category: string;
  rating: number;
  hronology: number;
  event: string;
};

const Card: React.FC = () => {
  const [dates, setDates] = React.useState<Dates[]>([]);
  const indexValue = useAppSelector((state) => state.filter.indexValue);
  const sorting = useAppSelector((state) => state.filter.sortRedux);
  const sortType = sorting.sortProperty;
  const searchValue = useAppSelector((state) => state.filter.searchValue);

  React.useEffect(() => {
    const category = indexValue > 0 ? `category=${indexValue}` : "";
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? `asc` : `desc`;
    axios
      .get(
        `https://65e5c6aad7f0758a76e755c3.mockapi.io/dates?${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => setDates(res.data));
  }, [indexValue, sorting]);
  return (
    <div className=" grid xl:grid-cols-[repeat(3,1fr)] grid-rows-[repeat(5,1fr)] gap-x-[30px] gap-y-5 p-4 m-6">
      {dates
        .filter((obj) => {
          if (
            obj.event
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .map((date) => (
          <div
            key={date.id}
            className=" border-indigo-500 rounded-lg border-[3px]  w-60 min-h-48 xl:mr-10 p-4 my-4 mx-auto"
          >
            <div className=" flex items-center justify-center text-blue-400">
              <LuSwords className=" text-3xl " />
              <b className=" text-3xl ">History</b>
            </div>
            <b className=" text-xl text-indigo-500 text-center flex justify-center my-2">
              {date.title}
            </b>
            <p className=" text-center text-xl">{date.event}</p>
          </div>
        ))}
    </div>
  );
};

export default Card;
