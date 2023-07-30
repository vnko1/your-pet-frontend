import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get("search");
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
