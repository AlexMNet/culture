import { ButtonGroup, Button } from "react-bootstrap";

const Pagination = ({ currentPage, loading, totalPages, setCurrentPage }) => {
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage <= 0) return;
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };
  const handleNextPage = () => {
    if (currentPage >= totalPages) return;
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className='mx-auto mb-4'>
      <ButtonGroup aria-label='Basic example'>
        <Button
          variant='secondary'
          onClick={handleFirstPage}
          disabled={currentPage === 1 || loading}
        >
          First
        </Button>
        <Button
          variant='secondary'
          onClick={handlePrevPage}
          disabled={currentPage === 1 || loading}
        >
          Prev
        </Button>
        <Button
          variant='secondary'
          onClick={handleNextPage}
          disabled={currentPage === totalPages || loading}
        >
          Next
        </Button>
        <Button
          variant='secondary'
          onClick={handleLastPage}
          disabled={currentPage === totalPages || loading}
        >
          Last
        </Button>
      </ButtonGroup>
      <div className='mx-auto text-center'>
        <small>
          Page: {currentPage} of {totalPages}
        </small>
      </div>
    </div>
  );
};
export default Pagination;
