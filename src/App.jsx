import { useEffect, useState } from "react";
import DirectionSelect from "./components/DirectionSelect.jsx";
import DirectionHeader from "./components/DirectionHeader.jsx";
import UpcomingBuses from "./components/UpcomingBuses.jsx";
import DepartedBuses from "./components/DepartedBuses.jsx";
import './App.css';

// https://jobymathew.net/bus/get-data.php


function App() {
  const [data, setData] = useState([]);
  const [direction, setDirection] = useState("northbound");

  useEffect(() => {
    fetch("https://abel.ist/bus/get-data.php")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  // console.log(direction);
  const filteredData = data.filter(row => row.direction === direction);

  return (
    <div>
      <header>
        <h1 className="text-4xl font-bold">Bus Vanno?</h1>
        <h2 className="text-xl">@ Palachuvadu Bus Stop</h2>
      </header>
      <main className="flex flex-col">
        <DirectionSelect direction={direction} setDirection={setDirection}/>
        <DirectionHeader direction={direction} setDirection={setDirection}/>
        <UpcomingBuses data={filteredData} />
        <DepartedBuses data={filteredData} />
      </main>
    </div>
  );
}

export default App;