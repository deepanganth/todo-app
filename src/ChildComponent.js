import "./styles.css";

function User(props) {
  const handleRemoveClick = (indexToRemove) => {
    props.onChange(props.value.filter((item, index) => index !== indexToRemove));
  };

  return (
    <>
      {props.value.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-display">
            <h1>{item}</h1>
          </div>
          <button className="rmve-btn" onClick={() => handleRemoveClick(index)}>remove</button>
        </div>
      ))}
    </>
  );
}

export default User;
