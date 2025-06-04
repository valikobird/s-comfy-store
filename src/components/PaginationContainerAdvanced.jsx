import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainerAdvanced = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    page > 2 && pageButtons.push(addDotsButton("dots-1"));

    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    page < pageCount - 1 && pageButtons.push(addDotsButton("dots-2"));

    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }),
    );
    return pageButtons;
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${activeClass ? "bg-base-300 border-base-300" : ""}`}
      >
        {pageNumber}
      </button>
    );
  };

  const addDotsButton = (key) => {
    return (
      <button key={key} className="join-item btn btn-xs sm:btn-md">
        ...
      </button>
    );
  };

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className={`btn btn-xs sm:btn-md join-item ${page === 1 ? "hidden" : ""}`}
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className={`btn btn-xs sm:btn-md join-item ${page === pageCount ? "hidden" : ""}`}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainerAdvanced;
