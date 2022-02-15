import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Data from './component/Data';


function data(val){
  return(
      <Card 
            imgsrc={val.imgsrc}
            name={val.title}
            desc={val.description} 
            links={val.links}
      />
  )
}
function App() {
  return (
    <>
    <div className="headings">
      <h1><span>Netflix</span> most popular web series.</h1>
    </div>
      <div className="App">
          {Data.map(data)}
    </div>
    </>
  );
}

export default App;
