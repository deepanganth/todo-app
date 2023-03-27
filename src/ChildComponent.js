import "./styles.css";

function User(props) {
    
  return (
    <div className="card">
      <img src={props.avatar} alt="avatar" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default User;
