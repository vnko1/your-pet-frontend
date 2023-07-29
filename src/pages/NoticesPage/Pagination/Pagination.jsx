import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 10;

  // Вычислите список страниц, которые нужно показать
  const getPageNumbers = () => {
    const firstPage = 1;
    const lastPage = totalPages;
    const maxVisiblePages = 5; // Максимальное количество видимых страниц

    // Если общее количество страниц меньше или равно максимальному количеству видимых страниц,
    // просто верните все страницы от 1 до последней
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Если текущая страница ближе к началу списка страниц
    if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      return Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
    }

    // Если текущая страница ближе к концу списка страниц
    if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      return Array.from(
        { length: maxVisiblePages },
        (_, i) => lastPage - maxVisiblePages + i + 1
      );
    }

    // В противном случае, текущая страница находится где-то посередине
    const offset = Math.floor(maxVisiblePages / 2);
    return Array.from(
      { length: maxVisiblePages },
      (_, i) => currentPage - offset + i
    );
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Добавьте здесь логику для загрузки данных соответствующей страницы, если необходимо
  };

  return (
    <nav style={{ margin: "20 0" }}>
      <ul className="pagination" style={{ display: "flex" }}>
        {getPageNumbers().map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
