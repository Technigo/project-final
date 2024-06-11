import PropTypes from "prop-types";

export const Pagination = ({
  totalItems,
  itemsPerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="flex border border-light-blue font-montserrat text-sm font-bold">
        <button
          onClick={() => paginate(1)}
          className="border border-light-blue p-4 text-blue"
        >
          First
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`text-blue ${currentPage === number ? "bg-blue text-white" : ""} border border-light-blue px-4`}
          >
            {number}
          </button>
        ))}
        <button
          className="text-blue border border-light-blue px-4"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.string.isRequired,
  paginate: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};
