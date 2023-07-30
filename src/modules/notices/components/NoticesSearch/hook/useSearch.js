import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.toString());

  useEffect(() => {
    const searchValue = searchParams.get("search");
    console.log("searchValue", searchValue);
    setSearch(searchValue || "");
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete("search");
        return prevSearchParams;
      });
    }
  };

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const resetInput = () => {
    setSearch("");
    //
    setSearchParams((prevSearchParams) => {
      prevSearchParams.delete("search");
      return prevSearchParams;
    });
    const updatedSearchParams = new URLSearchParams(searchParams);
    console.log("updatedSearchParams", updatedSearchParams);

    // Удаляем параметр "date"
    updatedSearchParams.delete("date");

    // Устанавливаем обновленные searchParams в состояние
    setSearchParams(updatedSearchParams);
  };

  return {
    search,
    setSearch,
    setSearchParams,
    handleSubmit,
    handleChange,
    resetInput,
  };
};

export default useSearch;
