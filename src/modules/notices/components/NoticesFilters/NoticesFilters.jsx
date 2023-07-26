import { useEffect, useState } from "react";
import {
  FilterBtn,
  FilterItem,
  FilterItemGender,
  FilterList,
  Label,
} from "./NoticesFilters.styled";
import CheckRoundSVG from "./svg/svg-check";
import UncheckRoundSVG from "./svg/svg-uncheck";
import FilterSVG from "./svg/svg-filter";
import ArrowSVG from "./svg/svg-arrow";

function NoticesFilters() {
  const [isExpandedFilter, setExpandedFilter] = useState(false);
  const [isExpandedAge, setExpandedAge] = useState(false);
  const [isExpandedGender, setExpandedGender] = useState(false);

  const [isBeforeOneYear, setIsBeforeOneYear] = useState(false);
  const [isUpOneYear, setIsUpOneYear] = useState(false);
  const [isUpTwoYear, setIsUpTwoYear] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isMale, setIsMale] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterClick = (e) => {
    // console.dir(e.target);
    const { nodeName, textContent } = e.target;
    const nodeValue = e.target.attributes.class?.nodeValue;

    if (
      nodeName === "DIV" ||
      (nodeName === "P" && textContent === "Filter") ||
      nodeValue === "main-icon"
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
          {screenWidth >= 768 && <p>Filter</p>}
          <FilterSVG />
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
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    By age
                  </p>
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
                  <ArrowSVG />
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
                  <p
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    By gender
                  </p>
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
                  <ArrowSVG />
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
