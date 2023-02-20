import { Form } from "react-bootstrap";

const Filter = ({ title, list, id, handler, defaultValue, object }) => {
    return (
      <div className="d-flex justify-content-end align-items-center me-2">
        <Form.Label htmlFor="filter" className="m-0 me-2 label">
          {title}
        </Form.Label>
        <Form.Select
          type="select"
          id={id}
          size="sm"
          value={defaultValue}
          onChange={handler}
        >
          <option value="All">All</option>
          {list.map((value, idx) => (
            <option value={object?value.title:value} key={idx}>
              {object?value.title:value}
            </option>
          ))}
        </Form.Select>
      </div>
    );
  };

  export default Filter