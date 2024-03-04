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
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setOpen } from "../redux/Slices/OpenAssideSlice";

const Asside: React.FC = () => {
  const openValue = useAppSelector((state: RootState) => state.open.openValue);
  const dispatch = useAppDispatch();

  type ItemsObj = {
    itemName: string;
    itemIcon: ReactElement;
  };

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
        className={` bg-blue-400 xl:w-80  h-screen ${
          !openValue ? ` w-64` : ``
        } `}
      >
        {items.map((item, i) => (
          <div
            className=" flex items-center text-white text-2xl  cursor-pointer p-3 hover:bg-blue-500"
            key={i}
          >
            <div className={`xl:mr-4 text-3xl ${openValue ? `mr-0` : `mr-4`} `}>
              {item.itemIcon}
            </div>
            {!openValue && <p className=" text-white">{item.itemName}</p>}
            <p className=" text-white xl:block hidden">{item.itemName}</p>
          </div>
        ))}
        {!openValue && (
          <div
            onClick={() => dispatch(setOpen(!openValue))}
            className=" bg-blue-400 border-2 border-white rounded-xl text-white w-1/2 xl:hidden text-center mx-auto mt-6 font-bold text-xl p-2 cursor-pointer"
          >
            <p>Скрыть</p>
          </div>
        )}
        {openValue && (
          <FaArrowRight
            onClick={() => dispatch(setOpen(!openValue))}
            className="bg-blue-400 border-2 border-white rounded-lg p-1 w-2/3 text-white xl:hidden text-center mx-auto mt-6 font-bold text-3xl cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Asside;
