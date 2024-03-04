import React from "react";

const Category: React.FC = () => {
  const categories: string[] = [
    "Все",
    "Петр 1",
    "Екатерина 2",
    "Войны",
    "Правители",
    "Прочее",
  ];
  const [indexClass, setIndexClass] = React.useState<number>(0);
  return (
    <div className=" flex items-center overflow-x-scroll w-72 xl:overflow-visible m-6 ">
      {categories.map((category, i) => (
        <div
          key={i}
          onClick={() => setIndexClass(i)}
          className={` border-[3px] rounded-2xl p-3 mr-3 text-xl font-bold  cursor-pointer min-w-40 hover:text-white hover:bg-indigo-500 ${
            indexClass === i
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
