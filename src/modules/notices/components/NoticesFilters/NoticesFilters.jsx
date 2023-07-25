import { useState } from "react";
import { FilterBtn, FilterItem, FilterList } from "./NoticesFilters.styled";

// const openFilter = () => {};

function NoticesFilters() {
  const [isExpandedFilter, setExpandedFilter] = useState(false);
  const [isExpandedAge, setExpandedAge] = useState(false);
  const [isExpandedGender, setExpandedGender] = useState(false);

  const handleFilterClick = (e) => {
    console.dir(e.target);
    const { nodeName, textContent } = e.target;

    if (nodeName === "DIV" || textContent === "Filter") {
      setExpandedFilter((prevState) => !prevState);
    }
  };

  const handleAgeClick = (e) => {
    const { nodeName, textContent } = e.target;

    if (nodeName === "LI" || textContent === "By age" || nodeName === "SVG") {
      setExpandedAge((prevState) => !prevState);
    }
  };

  const handleGenderClick = (e) => {
    const { nodeName } = e.target;

    if (nodeName === "LI") {
      setExpandedGender((prevState) => !prevState);
    }
  };

  return (
    <FilterBtn isExpandedFilter={isExpandedFilter} onClick={handleFilterClick}>
      {!isExpandedFilter ? (
        <>
          <p>Filter</p>
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
                    <label
                      key={3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        height: 24,
                      }}
                    >
                      <input
                        style={{
                          borderColor: "green",
                        }}
                        type="checkbox"
                        // checked={checked}
                        // onChange={onChange}
                      />
                      <p>3-12 m</p>
                    </label>
                    <label
                      key={4}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        height: 24,
                      }}
                    >
                      <input
                        type="checkbox"
                        // checked={checked}
                        // onChange={onChange}
                      />
                      <p>up to 1 year</p>
                    </label>
                    <label
                      key={5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        height: 24,
                      }}
                    >
                      <input
                        type="checkbox"
                        // checked={checked}
                        // onChange={onChange}
                      />
                      <p>up to 2 year</p>
                    </label>
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
                  By age
                </>
              )}
            </FilterItem>
            <FilterItem key={2} onClick={handleGenderClick}>
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
              By gender
            </FilterItem>
          </FilterList>
        </>
      )}
    </FilterBtn>
  );
}

export default NoticesFilters;
