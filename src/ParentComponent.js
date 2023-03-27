import Card from "./ChildComponent";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import './styles.css';

function ParentComponent() {
  return (
    <div className="main-box">
      <Card
        url={img1}
        title="title1"
        description="cyan"
      />
      <Card
        url={img2}
        title="title2"
        description="black"
      />
      <Card
        url={img3}
        title="title3"
        description="violet"
      />
    </div>
  );
}

export default ParentComponent;
