import BusCard from "./BusCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faClock, faCheck, faSortUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpcomingBuses = ({ data }) => {
    const [expand, setExpand] = useState(false);
    // Get current time as minutes since midnight
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    // Filter buses with ET within 30 minutes before now or after now
    const filtered = data.filter((bus) => {
        // Assume bus.ET is in 'HH:mm' format
        if (!bus.ET) return false;
        const [h, m] = bus.ET.split(":").map(Number);
        if (isNaN(h) || isNaN(m)) return false;
        const busMinutes = h * 60 + m;
        return (busMinutes - nowMinutes) >= -30;
    });

    const busesToShow = expand ? filtered : filtered.slice(0, 5);

    return (
        <div>
            <div className="flex items-center space-x-4 text-blue-600">
                <FontAwesomeIcon icon={faBus} />
                <FontAwesomeIcon icon={faClock} />
                <h1 className="font-semibold mt-6 mb-2">Upcoming Buses</h1>
            </div>
            <div className="grid grid-cols-3 gap-2 font-semibold text-gray-600 px-4 py-2">
              <div><span>ETA</span><FontAwesomeIcon icon={faArrowUp} className="ml-1 text-gray-500" /></div>
              {/* <div>ID</div> */}
              <div>Bus Name</div>
              <div>Route</div>
              {/* <div>Arrival</div> */}
            </div>
            <div className="flex flex-col gap-2">
                {busesToShow.map((bus) => (
                    <BusCard data={bus} key={bus.id}></BusCard>
                ))}
            {filtered.length > 6 && (
                <button
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm hover:bg-blue-200 transition-colors mt-2 self-center cursor-pointer border border-blue-500"
                onClick={() => setExpand((prev) => !prev)}
                type="button"
                >
                {expand ? "Show less" : `Show all (${filtered.length})`}
                </button>
            )}
            </div>
        </div>
    );
}

export default UpcomingBuses;