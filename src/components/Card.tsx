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
  // React.useEffect(() => {
  //   setIsLoading(true);

  //   const sortBy = sortType.replace("-", "");
  //   const order = sortType.includes("-") ? `asc` : `desc`;
  //   const categorie = categoryId > 0 ? `category=${categoryId}` : "";

  //   axios
  //     .get(
  //       `https://65cc6b19dd519126b83e6b54.mockapi.io/items?&page=1&${categorie}&sortBy=${sortBy}&order=${order}`
  //     )
  //     .then((res) => {
  //       setItems(res.data);
  //       setIsLoading(false);
  //     });

  React.useEffect(() => {
    const category = indexValue > 0 ? `category=${indexValue}` : "";

    axios
      .get(`https://65e5c6aad7f0758a76e755c3.mockapi.io/dates?${category}`)
      .then((res) => setDates(res.data));
  }, [indexValue]);
  return (
    <div className=" flex flex-wrap p-4 m-6">
      {dates.map((date) => (
        <div
          key={date.id}
          className=" border-indigo-500 rounded-lg border-[3px] xl:w-1/4 w-60 min-h-48 xl:mr-10 p-4 my-4 mx-auto"
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
