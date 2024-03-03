import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { RiDraftFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

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
            <div className="hover:cursor-pointer ">
              <RiDraftFill className=" text-3xl " />
            </div>
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
          to="/"
          className="xl:flex items-center hover:cursor-pointer hidden"
        >
          <RiDraftFill className=" text-2xl mr-1" />
          <h1 className=" text-2xl ">Черновик</h1>
        </Link>
      </header>
    </div>
  );
};

export default Header;
