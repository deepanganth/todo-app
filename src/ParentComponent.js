import { useState } from "react";
import User from "./ChildComponent";
import "./styles.css";

function ParentComponent() {
  const [value, setValue] = useState("");
  const [arrayValues, setArrayValues] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    setArrayValues([...arrayValues, value]);
    setValue("");
  };

  const handleArrayChange = (newArrayValues) => {
    setArrayValues(newArrayValues);
  };

  return (
    <>
      <div className="section">
        <div className="input-val">
          <input type="text" value={value} onChange={handleChange} />
          <button className="add-btn" onClick={handleClick}>
            Add
          </button>
        </div>
        <div className="main-box">
          <User value={arrayValues} onChange={handleArrayChange} />
        </div>
      </div>
    </>
  );
}

export default ParentComponent;