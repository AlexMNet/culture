import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import {
  Pagination,
  Images,
  MainNavbar,
  FormComponent,
  Header,
} from "../components";

const Home = () => {
  const [images, setImages] = useState([]);
  const [sort, setSort] = useState("unclassified");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [results, setResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const response = await axios(
      `/api/v1/images/?page=${currentPage}&classification=${sort}`
    );
    setImages(response.data.images);
    setResults(response.data.results);
    setTotalPages(response.data.pages);
    setLoading(false);
  };
  useEffect(() => {
    fetchImages();
    window.scrollTo(0, 0);
    //eslint-disable-next-line
  }, [sort, currentPage, totalPages]);

  const setClassification = async (e, image_id) => {
    try {
      await axios.patch(`/api/v1/images/${image_id}`, {
        classification: e.target.value,
      });
      fetchImages();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <MainNavbar />
      <Container className='d-flex flex-column mx-auto mt-5'>
        <FormComponent handleOnChange={handleOnChange} />
        <Header sort={sort} results={results} loading={loading} />
        <Images images={images} setClassification={setClassification} />
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          loading={loading}
          totalPages={totalPages}
        />
      </Container>
    </>
  );
};
export default Home;
