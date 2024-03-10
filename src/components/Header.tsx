import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { RiDraftFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const countCards = useAppSelector((state) => state.cart.items);

  return (
    <div className=" text-white ">
      <header className=" bg-indigo-500 flex p-3 xl:justify-normal justify-between">
        <div className=" xl:hidden block text-4xl ">
          <IoIosMenu onClick={() => setOpenMenu(!openMenu)} />
        </div>
        {openMenu && (
          <div className=" flex items-center justify-between w-2/3 ">
            <Link to="/">
              <div className="hover:cursor-pointer">
                <FaBookOpen className=" text-3xl " />
              </div>
            </Link>
            <Link to="/main">
              <div className="hover:cursor-pointer ">
                <FaHome className=" text-3xl " />
              </div>
            </Link>
            <Link to="/cart">
              <div className="hover:cursor-pointer flex items-center">
                <RiDraftFill className=" text-3xl " />
                {countCards.length > 0 && (
                  <h1 className=" bg-red-500 rounded-full py-[2.5px] px-2 font-bold mb-3">
                    {countCards.length}
                  </h1>
                )}
              </div>
            </Link>
          </div>
        )}
        <Link
          to="/"
          className={` items-center hover:cursor-pointer xl:ml-16 xl:mr-20  ${
            openMenu ? `hidden` : `flex`
          }`}
        >
          <FaBookOpen className=" text-2xl mr-1" />
          <h1 className=" text-2xl">SchoolHuB</h1>
        </Link>
        <Link
          to="/main"
          className="xl:flex items-center xl:mr-20 hover:cursor-pointer hidden"
        >
          <FaHome className=" text-2xl mr-1" />
          <h1 className=" text-2xl ">Главная</h1>
        </Link>
        <Link
          to="/cart"
          className="xl:flex items-center hover:cursor-pointer hidden"
        >
          <RiDraftFill className=" text-2xl mr-1" />
          <h1 className=" text-2xl ">Черновик</h1>
          {countCards.length > 0 && (
            <h1 className=" bg-red-500 rounded-full py-[2.5px] px-2 font-bold ml-1">
              {countCards.length}
            </h1>
          )}
        </Link>
      </header>
    </div>
  );
};

export default Header;
