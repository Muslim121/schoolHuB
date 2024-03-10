import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className=" text-center text-2xl text-indigo-500 ">
      <h1 className=" font-bold mt-3 text-3xl mb-2">Черновик пуст</h1>
      <p>Вы еще ничего не добавляли в черновик</p>
      <p>Чтобы добавить карточку в черновик перейдите на главную</p>
      <img
        className=" xl:w-1/4 w-2/3 mx-auto"
        src="https://oir.mobi/uploads/posts/2019-12/thumbs/1576643067_17-37.png"
        alt="Грустный смайлик"
      />
      <div>
        <Link to="/main">
          <div className=" border-2 border-indigo-500 rounded-xl text-indigo-500 font-bold p-3 text-xl mx-auto xl:w-1/6 w-2/3 hover:text-white hover:bg-indigo-500">
            Вернуться назад
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
