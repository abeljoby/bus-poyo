
import BusCard from "./BusCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faClock, faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const DepartedBuses = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  // Filter buses with ET within 30 minutes before now or after now
  const filtered = data.filter((bus) => {
    // Assume bus.ET is in 'HH:mm' format
    if (!bus.ET) return false;
    const [h, m] = bus.ET.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return false;
    const busMinutes = h * 60 + m;
    return (busMinutes - nowMinutes) < -30;
  });

  // Sort filtered buses by descending ET (latest time first)
  const sorted = [...filtered].sort((a, b) => {
    if (!a.ET || !b.ET) return 0;
    const [ah, am] = a.ET.split(":").map(Number);
    const [bh, bm] = b.ET.split(":").map(Number);
    const aMinutes = ah * 60 + am;
    const bMinutes = bh * 60 + bm;
    return bMinutes - aMinutes;
  });

  const busesToShow = expand ? sorted : sorted.slice(0, 5);

  return (
    <div>
      <div className="flex items-center space-x-4 text-red-600">
      <FontAwesomeIcon icon={faBus} />
      <FontAwesomeIcon icon={faCheck} />
      <h1 className="text-2xl font-semibold mt-6 mb-2">Departed Buses</h1>
      </div>
      <div className="grid grid-cols-3 gap-2 font-semibold text-gray-600 px-4 py-2">
      <div>
        <span>ETA</span>
        <FontAwesomeIcon icon={faArrowDown} className="ml-1 text-gray-500" />
      </div>
      {/* <div>ID</div> */}
      <div>Bus Name</div>
      <div>Route</div>
      {/* <div>Arrival</div> */}
      </div>
      <div className="flex flex-col gap-2">
      {busesToShow.map((row) => (
        <BusCard data={row} key={row.id}></BusCard>
      ))}
      {sorted.length > 6 && (
        <button
        className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium shadow-sm hover:bg-red-200 transition-colors mt-2 self-center cursor-pointer border-1 border-red-500"
        onClick={() => setExpand((prev) => !prev)}
        type="button"
        >
        {expand ? "Show less" : `Show all (${sorted.length})`}
        </button>
      )}
      </div>
    </div>
  );
}

export default DepartedBuses;