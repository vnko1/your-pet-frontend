import { useEffect, useState } from "react";
import {
  Input,
  SubmitBtn,
  Form,
  ResetBtn,
  BtnsWrap,
  ContainerNoticesSearch,
} from "./NoticesSearch.styled";
import { useSearchParams } from "react-router-dom";

// const Status = {
//   IDLE: "idle",
//   PENDING: "pending",
//   RESOLVED: "resolved",
//   REJECTED: "rejected",
// };

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get("search");
    setSearch(searchValue || "");
  }, [searchParams]);

  const handleSearchChange = (value) => {
    console.log("value", value);
    setSearch(value);
    if (value === "") {
      setSearchParams((prevSearchParams) => {
        prevSearchParams.delete("search");
        return prevSearchParams;
      });
    } else {
      setSearchParams({ search: value });
    }
  };

  const resetInput = () => {
    setSearch("");
    setSearchParams((prevSearchParams) => {
      prevSearchParams.delete("search");
      return prevSearchParams;
    });
  };

  return {
    search,
    handleSearchChange,
    resetInput,
  };
};

function NoticesSearch() {
  // =====================с хуком==========================
  const { search, handleSearchChange, resetInput } = useSearch();
  // const fullURL = window.location.href;
  // console.log("fullURL", fullURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    // запрос
  };

  // =====================без хука==========================
  // нуту сброса инпута при смене категории
  // const [search, setSearch] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();

  // const fullURL = window.location.href;
  // // console.log("fullURL", fullURL);

  // useEffect(() => {
  //   const searchValue = searchParams.get("search");
  //   setSearch(searchValue || "");
  // }, [searchParams]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSearchParams({ search });
  //   // запрос с url походу - fullURL
  // };

  // const handleChange = (e) => {
  //   const { value } = e.currentTarget;
  //   setSearch(value);
  // };

  // const resetInput = () => {
  //   setSearch("");
  //   setSearchParams((prevSearchParams) => {
  //     prevSearchParams.delete("search");
  //     return prevSearchParams;
  //   });
  // };
  // ===================================================

  // useEffect(() => {
  //   if (!searchValue) {
  //     return;
  //   }

  //   const abortController = new AbortController();

  //   (async function fetch() {
  //     try {
  //       // тут fetch
  //       // const searchPets = await fetch(setSearchParams, abortController);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();

  //   return () => {
  //     abortController.abort();
  //   };
  // }, [searchValue]);

  return (
    // временный контейнер
    <ContainerNoticesSearch>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search"
          value={search}
          // onChange={handleChange}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <BtnsWrap>
          <SubmitBtn type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z"
                fill="#54ADFF"
              />
            </svg>
          </SubmitBtn>
          {search && (
            <ResetBtn onClick={resetInput}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 5L5 19M5.00004 5L19 19"
                  stroke="#FFC107"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ResetBtn>
          )}
        </BtnsWrap>
      </Form>
    </ContainerNoticesSearch>
  );
}

export default NoticesSearch;
