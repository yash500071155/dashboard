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
      <div className="middle-section">
        <p>Activities | 26th Apr, 2020</p>
        <div className="line"></div>
        <button className="btn">+ Schedule Activity</button>
        </div>
      <div className="bottom-section">
        <TimeTable />
      </div>
    </div>
  );
}

export default App;
