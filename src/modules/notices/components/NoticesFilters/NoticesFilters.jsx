import { useState } from "react";
import {
  FilterBtn,
  FilterItem,
  FilterItemGender,
  FilterList,
  Label,
} from "./NoticesFilters.styled";
import CheckRoundSVG from "./svg-check";
import UncheckRoundSVG from "./svg-uncheck";

// const openFilter = () => {};

function NoticesFilters() {
  const [isExpandedFilter, setExpandedFilter] = useState(false);
  const [isExpandedAge, setExpandedAge] = useState(false);
  const [isExpandedGender, setExpandedGender] = useState(false);

  const [isBeforeOneYear, setIsBeforeOneYear] = useState(false);
  const [isUpOneYear, setIsUpOneYear] = useState(false);
  const [isUpTwoYear, setIsUpTwoYear] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isMale, setIsMale] = useState(false);

  const handleFilterClick = (e) => {
    console.dir(e.target);
    const { nodeName, textContent } = e.target;

    console.dir(e.target);

    if (
      nodeName === "DIV" ||
      (nodeName === "P" && textContent === "Filter") ||
      nodeName === "svg"
    ) {
      setExpandedFilter((prevState) => !prevState);
    }
  };

  const handleAgeClick = (e) => {
    const { tagName, textContent } = e.target;

    if (tagName === "LI" || (tagName === "P" && textContent === "By age")) {
      setExpandedAge((prevState) => !prevState);
    }
  };

  const handleGenderClick = (e) => {
    const { tagName, textContent } = e.target;

    if (tagName === "LI" || (tagName === "P" && textContent === "By gender")) {
      setExpandedGender((prevState) => !prevState);
    }
  };

  return (
    <FilterBtn isExpandedFilter={isExpandedFilter} onClick={handleFilterClick}>
      {!isExpandedFilter ? (
        <>
          {/* <p>Filter</p> */}
          <svg
            style={{
              zIndex: 5,
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 4L9 12V18L15 21V12L20 4H4Z"
              stroke="#54ADFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ) : (
        <>
          <p
            style={{
              width: "100%",
              pointerEvents: "none",
            }}
          >
            Filter
          </p>
          <FilterList>
            <FilterItem
              key={1}
              isExpandedAge={isExpandedAge}
              onClick={handleAgeClick}
            >
              {isExpandedAge ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <p>By age</p>
                  <div>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isBeforeOneYear}
                        onChange={() => setIsBeforeOneYear((prev) => !prev)}
                      />
                      {isBeforeOneYear ? (
                        <CheckRoundSVG />
                      ) : (
                        <UncheckRoundSVG />
                      )}
                      <span>3-12 m</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isUpOneYear}
                        onChange={() => setIsUpOneYear((prev) => !prev)}
                      />
                      {isUpOneYear ? <CheckRoundSVG /> : <UncheckRoundSVG />}
                      <span>up to 1 year</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isUpTwoYear}
                        onChange={() => setIsUpTwoYear((prev) => !prev)}
                      />
                      {isUpTwoYear ? <CheckRoundSVG /> : <UncheckRoundSVG />}
                      <span>up to 2 year</span>
                    </Label>
                  </div>
                </div>
              ) : (
                <>
                  <svg
                    style={{
                      pointerEvents: "none",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 9L12 17L20 9"
                      stroke="#54ADFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>By age</p>
                </>
              )}
            </FilterItem>
            <FilterItemGender
              key={2}
              isExpandedGender={isExpandedGender}
              onClick={handleGenderClick}
            >
              {isExpandedGender ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <p>By gender</p>
                  <div>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isFemale}
                        onChange={() => setIsFemale((prev) => !prev)}
                      />
                      {isFemale ? <CheckRoundSVG /> : <UncheckRoundSVG />}
                      <span>female</span>
                    </Label>
                    <Label>
                      <input
                        type="checkbox"
                        checked={isMale}
                        onChange={() => setIsMale((prev) => !prev)}
                      />
                      {isMale ? <CheckRoundSVG /> : <UncheckRoundSVG />}
                      <span>male</span>
                    </Label>
                  </div>
                </div>
              ) : (
                <>
                  <svg
                    style={{
                      pointerEvents: "none",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 9L12 17L20 9"
                      stroke="#54ADFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>By gender</p>
                </>
              )}
            </FilterItemGender>
          </FilterList>
        </>
      )}
    </FilterBtn>
  );
}

export default NoticesFilters;
