import Counter from "./ChildComponent";
import './styles.css';

function ParentComponent() {
  return (
    <div className="main-box">
        <Counter/>
    </div>
  );
}

export default ParentComponent;
