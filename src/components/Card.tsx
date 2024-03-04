import axios from "axios";
import React from "react";

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
    <div>
      {/* {dates.map((date,i)=>(
      <div clas>

      </div>
    ))} */}
    </div>
  );
};

export default Card;
