import './App.css';
import BatchInfo from "./Component/BatchInfo";
import Rating from "./Component/Rating";
import TimeTable from "./Component/TimeTable";

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <BatchInfo />
        <Rating />
      </div>
 
      <div className="bottom-section">
        <TimeTable />
      </div>
      
    </div>
  );
}

export default App;
