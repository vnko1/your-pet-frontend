import { FilterBtn } from "./NoticesFilters.styled";

function NoticesFilters() {
  return (
    <FilterBtn>
      Filter
      <svg
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
    </FilterBtn>
  );
}

export default NoticesFilters;
