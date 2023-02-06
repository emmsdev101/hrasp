import { Form } from "react-bootstrap";

const Filter = ({ title, list, id, handler, defaultValue }) => {
    return (
      <div className="d-flex justify-content-end align-items-center me-2">
        <Form.Label htmlFor="filter" className="m-0 me-2">
          {title}
        </Form.Label>
        <Form.Select
          type="select"
          id={id}
          size="sm"
          value={defaultValue}
          onChange={handler}
        >
          {list.map((value, idx) => (
            <option value={value} key={idx}>
              {value}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  };

  export default Filter