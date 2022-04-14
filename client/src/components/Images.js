const Images = ({ images, setClassification }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image._id} className='d-flex flex-column mb-5 mx-auto'>
          <img src={image.url} alt='bio reactor' height='500px' />
          <small className='text-center'>Status: {image.classification}</small>
          <small className='text-center'>Image Id: {image._id}</small>
          <div className='d-grid gap-2 mx-auto'>
            <button
              className='btn btn-warning'
              type='button'
              value='foaming'
              onClick={(e) => setClassification(e, image._id)}
            >
              Foaming
            </button>
            <button
              className='btn btn-primary'
              type='button'
              value='not-foaming'
              onClick={(e) => setClassification(e, image._id)}
            >
              Not Foaming
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Images;
