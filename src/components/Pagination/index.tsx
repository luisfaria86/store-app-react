export interface PaginationProps {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  pages: string
};

const Pagination = ({ pages, handlePreviousPage, handleNextPage }: PaginationProps) => {
  return (
    <div className="flex justify-center mt-4 mb-12">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">
          {pages}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-700 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
  );
};

export default Pagination;









