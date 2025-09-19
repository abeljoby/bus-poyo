import { useEffect, useState } from "react";
import DirectionSelect from "./components/DirectionSelect.jsx";
import DirectionHeader from "./components/DirectionHeader.jsx";
import UpcomingBuses from "./components/UpcomingBuses.jsx";
import DepartedBuses from "./components/DepartedBuses.jsx";
import LiveClock from "./components/LiveClock.jsx";
import './App.css';
import BusLegend from "./components/BusLegend.jsx";

// https://jobymathew.net/bus/get-data.php

function App() {
  const [data, setData] = useState([]);
  const [direction, setDirection] = useState("northbound");
  const [showScroll, setShowScroll] = useState(false); // <-- Add this

  useEffect(() => {
    fetch("https://abel.ist/bus/get-data.php")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  // Show button after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredData = data.filter(row => row.direction === direction);

  return (
    <div className="py-2 px-2">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Bus Poyo?</h1>
          <h2 className="text-xl">@ Palachuvadu Bus Stop</h2>
        </div>
        <LiveClock />
      </header>
      <main className="flex flex-col gap-4">
        <DirectionSelect direction={direction} setDirection={setDirection}/>
        {/* <DirectionHeader direction={direction} setDirection={setDirection}/> */}
        {/* <BusLegend /> */}
        <UpcomingBuses data={filteredData} />
        <DepartedBuses data={filteredData} />
      </main>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 pb-3 pt-2 rounded-full shadow-lg hover:bg-blue-700 cursor-pointer transition"
          aria-label="Scroll to top"
        >
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default App;