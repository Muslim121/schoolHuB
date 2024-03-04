import axios from "axios";
import React from "react";
import { LuSwords } from "react-icons/lu";

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

  React.useEffect(() => {
    axios
      .get("https://65e5c6aad7f0758a76e755c3.mockapi.io/dates")
      .then((res) => setDates(res.data));
  }, []);
  return (
    <div className=" flex flex-wrap p-4">
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
