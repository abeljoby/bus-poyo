import { useEffect, useState } from "react";
import DirectionSelect from "./components/DirectionSelect.jsx"
import UpcomingBuses from "./components/UpcomingBuses.jsx";
import './App.css';

// https://jobymathew.net/bus/get-data.php


function App() {
  const [data, setData] = useState([]);
  const [direction, setDirection] = useState("northbound");

  useEffect(() => {
    fetch("https://jobymathew.net/bus/get-data.php")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  // console.log(direction);
  const filteredData = data.filter(row => row.direction === direction);

  return (
    <div>
      <header>
        <h1>Bus Vanno?</h1>
        <h2>@ Palachuvadu Bus Stop</h2>
      </header>
      <main>
        <DirectionSelect direction={direction} setDirection={setDirection}/>
        <UpcomingBuses data={filteredData} />
        <h1>Departed Buses</h1>
        <ul>
          {data.map((row, idx) => (
            <li key={idx}>{JSON.stringify(row)}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;