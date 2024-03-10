import React from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import debounce from "lodash.debounce";
import { MdClear } from "react-icons/md";
import { setSearchValue } from "../redux/Slices/FilterSlice";

const Search = () => {
  const searchValue = useAppSelector((state) => state.filter.searchValue);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className=" flex items-center relative">
      <CiSearch className=" absolute text-indigo-500 text-xl left-1" />
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className=" xl:w-96 w-64 border-indigo-500 rounded-xl h-10 border-[2px] pl-9"
      />
      {searchValue && (
        <MdClear onClick={onClickClear} className=" text-indigo-500 " />
      )}
    </div>
  );
};

export default Search;
