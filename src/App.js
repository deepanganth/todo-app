
import './App.css';
import ChildComponent from './ChildComponent';

function App() {
  const name = 'deepan';
  function handleClick(){
    console.log('button clicked',name);
  };
  return (
    <div className="App">
      <ChildComponent onClick={handleClick}/>
    </div>
  );
}

export default App;
