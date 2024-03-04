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
import { Link } from "react-router-dom";

const Asside: React.FC = () => {
  const openValue = useAppSelector((state: RootState) => state.open.openValue);
  const dispatch = useAppDispatch();

  type ItemsObj = {
    itemName: string;
    itemIcon: ReactElement;
    pathName: string;
  };

  const items: ItemsObj[] = [
    {
      itemName: "История",
      itemIcon: <LuSwords />,
      pathName: "/main/history",
    },
    {
      itemName: "Физика",
      itemIcon: <FaReact />,
      pathName: "/main/physics",
    },
    {
      itemName: "Геометрия",
      itemIcon: <IoTriangle />,
      pathName: "/main/geometry",
    },
    {
      itemName: "Музыка",
      itemIcon: <IoMdMusicalNote />,
      pathName: "/main/music",
    },
    {
      itemName: "Литература",
      itemIcon: <FaBookOpen />,
      pathName: "/main/literature",
    },
    {
      itemName: "Алгебра",
      itemIcon: <TbMath />,
      pathName: "/main/algebra",
    },
    {
      itemName: "География",
      itemIcon: <FaGlobeAmericas />,
      pathName: "/main/geograthy",
    },
    {
      itemName: "Биология",
      itemIcon: <FaLeaf />,
      pathName: "/main/biology",
    },
    {
      itemName: "Химия",
      itemIcon: <SlChemistry />,
      pathName: "/main/chemistry",
    },
    {
      itemName: "Английский",
      itemIcon: <RiEnglishInput />,
      pathName: "/main/english",
    },
  ];
  return (
    <div className=" flex ">
      <div
        className={` bg-blue-400 xl:w-80 h-screen rounded-br-xl ${
          !openValue ? ` w-64` : ``
        } `}
      >
        {items.map((item, i) => (
          <Link to={item.pathName}>
            <div
              className=" flex items-center text-white text-2xl cursor-pointer p-3 hover:bg-blue-500"
              key={i}
            >
              <div
                className={`xl:mr-4 text-3xl ${openValue ? `mr-0` : `mr-4`} `}
              >
                {item.itemIcon}
              </div>
              {!openValue && <p className=" text-white">{item.itemName}</p>}
              <p className=" text-white xl:block hidden">{item.itemName}</p>
            </div>
          </Link>
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
