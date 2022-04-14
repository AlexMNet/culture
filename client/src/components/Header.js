import ClipLoader from "react-spinners/ClipLoader";
const Header = ({ sort, results, loading }) => {
  return (
    <div className='d-flex flex-column mx-auto text-center justify-content-center'>
      <h1>{sort.toUpperCase()} IMAGES</h1>
      <small>Results: {results}</small>
      <div className='mx-auto'>{loading && <ClipLoader />}</div>
    </div>
  );
};
export default Header;
