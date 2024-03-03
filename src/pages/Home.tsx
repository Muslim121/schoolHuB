import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className=" xl:flex justify-center mt-[20px]  items-center">
      <div className=" text-center mt-10">
        <h1 className=" xl:text-6xl text-4xl text-indigo-500">
          Добро пожаловать
          <br />{" "}
          <p className=" flex text-green-500 font-bold xl:text-6xl text-4xl mt-[10px] justify-center items-center">
            <FaBookOpen className=" xl:text-5xl text-3xl xl:mr-2 mr-1" />
            SchoolHuB
          </p>
        </h1>
        <p className=" text-xl xl:w-2/3 w-full mt-6 mx-auto ">
          Этот сайт поможет вам подтянуть оценки. Переходите в главную,
          выбирайте нужный вам предмет и начинайте учиться или списывайте на
          уроках
        </p>
        <Link to="/main">
          <div className=" bg-indigo-500 text-white font-bold text-2xl my-[20px] w-[160px] p-2 mx-auto rounded-xl cursor-pointer">
            Начать
          </div>
        </Link>
      </div>
      <div>
        <img
          className=" xl:w-full xl:mt-0 "
          src="https://pictures.pibig.info/uploads/posts/2023-04/1681417984_pictures-pibig-info-p-vektornii-risunok-gorod-vkontakte-5.png"
          alt="city"
        />
      </div>
    </div>
  );
};

export default Home;
