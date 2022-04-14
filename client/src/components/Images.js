const Images = ({ images, setClassification }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image._id} className='d-flex flex-column w-75 mb-5 mx-auto'>
          <img src={image.url} alt='bio reactor' className='img-fluid' />

          <h6 className='text-center'>
            <span className='badge badge-info'>
              Status: {image.classification}
            </span>
          </h6>
          <small className='text-center'>Image Id: {image._id}</small>
          <div className='d-grid gap-2 mx-auto mt-2'>
            <button
              className='btn btn-warning mr-3'
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
