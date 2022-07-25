import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const push = (element) => setValue((prevValue) => [...prevValue, element]);

  const remove = (index) => {
    setValue((prevValue) => prevValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;

  const clear = () => setValue([]);

  const sort = () => setValue((prevValue) => [...prevValue].sort());

  const reverse = () => setValue((prevValue) => [...prevValue].reverse());

  return { value, push, remove, isEmpty, clear, sort, reverse };
};

export default useList;
