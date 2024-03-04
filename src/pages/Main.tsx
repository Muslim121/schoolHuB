import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import Asside from "../components/Asside";

const Main: React.FC = () => {
  const openValue = useAppSelector((state: RootState) => state.open.openValue);

  return (
    <div className=" flex items-center">
      <Asside />
      {openValue && (
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
