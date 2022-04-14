import { Form } from "react-bootstrap";

const FormComponent = ({ handleOnChange }) => {
  return (
    <div className='mx-auto mb-5'>
      {/* <label htmlFor='form'>Sort</label> */}
      <Form.Select
        aria-label='Default select example'
        name='form'
        onChange={handleOnChange}
      >
        <option>Sort by:</option>
        <option value='all'>All</option>
        <option value='unclassified' selected>
          Unclassified
        </option>
        <option value='foaming'>Foaming</option>
        <option value='not-foaming'>Not-Foaming</option>
      </Form.Select>
    </div>
  );
};
export default FormComponent;
