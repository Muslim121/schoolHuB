import React, { ReactElement } from "react";
import { LuSwords } from "react-icons/lu";
import { FaReact } from "react-icons/fa6";
import { IoTriangle } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { TbMath } from "react-icons/tb";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { RiEnglishInput } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

const Main: React.FC = () => {
  type ItemsObj = {
    itemName: string;
    itemIcon: ReactElement;
  };
  const [openAsside, setOpenAsside] = React.useState(true);

  const items: ItemsObj[] = [
    {
      itemName: "История",
      itemIcon: <LuSwords />,
    },
    {
      itemName: "Физика",
      itemIcon: <FaReact />,
    },
    {
      itemName: "Геометрия",
      itemIcon: <IoTriangle />,
    },
    {
      itemName: "Музыка",
      itemIcon: <IoMdMusicalNote />,
    },
    {
      itemName: "Литература",
      itemIcon: <FaBookOpen />,
    },
    {
      itemName: "Алгебра",
      itemIcon: <TbMath />,
    },
    {
      itemName: "География",
      itemIcon: <FaGlobeAmericas />,
    },
    {
      itemName: "Биология",
      itemIcon: <FaLeaf />,
    },
    {
      itemName: "Химия",
      itemIcon: <SlChemistry />,
    },
    {
      itemName: "Английский",
      itemIcon: <RiEnglishInput />,
    },
  ];
  return (
    <div className=" flex items-center">
      <div
        className={` bg-blue-400 xl:w-1/4  h-screen ${
          !openAsside ? `w-2/3` : ``
        } `}
      >
        {items.map((item, i) => (
          <div
            className=" flex items-center text-white text-2xl  cursor-pointer p-3 hover:bg-blue-500"
            key={i}
          >
            <div
              className={`xl:mr-4 text-3xl ${openAsside ? `mr-0` : `mr-4`} `}
            >
              {item.itemIcon}
            </div>
            {!openAsside && <p className=" text-white">{item.itemName}</p>}
            <p className=" text-white xl:block hidden">{item.itemName}</p>
          </div>
        ))}
        {!openAsside && (
          <div
            onClick={() => setOpenAsside(!openAsside)}
            className=" bg-blue-400 border-2 border-white rounded-xl text-white w-1/2 xl:hidden text-center mx-auto mt-6 font-bold text-xl p-2 cursor-pointer"
          >
            <p>Скрыть</p>
          </div>
        )}
        {openAsside && (
          <FaArrowRight
            onClick={() => setOpenAsside(!openAsside)}
            className="bg-blue-400 border-2 border-white rounded-lg p-1 w-2/3 text-white xl:hidden text-center mx-auto mt-6 font-bold text-3xl cursor-pointer"
          />
        )}
      </div>

      {openAsside && (
        <div className=" h-screen  xl:w-3/4 text-center">
          <h1 className=" text-center text-4xl xl:text-5xl text-indigo-500 mt-9">
            Выберите нужный <p className=" text-green-400">предмет</p>
          </h1>
          <p className=" w-full p-5 xl:w-2/3 text-center mx-auto text-lg xl:text-xl xl:mt-9 mt-3">
            В каждом предмете вы найдете нужную вам информацию, которая
            пригодится вам на самостоятельных, тестах и контрольных. Этот сайт
            поможет вам подготовиться или списать. Тут есть даты по истории,
            формулы по физике и многое другое.
          </p>
          <img
            src="https://gas-kvas.com/uploads/posts/2023-03/1678451289_gas-kvas-com-p-kniga-risunok-cherno-belii-na-prozrachnom-7.png"
            alt="Книга"
            className=" xl:w-1/3 mx-auto mt-9 w-2/3"
          />
        </div>
      )}
    </div>
  );
};

export default Main;
