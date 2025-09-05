import BusCard from "./BusCard";
import { useState } from "react";

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
      <>
          <div className="flex items-center mt-6 mb-2">
              <h1 className="text-2xl font-semibold mr-4">Upcoming Buses</h1>
          </div>
          <div className="grid grid-cols-3 gap-2 font-semibold text-gray-600 px-4 py-2">
              <div>ETA</div>
              {/* <div>ID</div> */}
              <div>Bus Name</div>
              <div>Route</div>
              {/* <div>Arrival</div> */}
          </div>
          <div className="flex flex-col gap-2">
              {busesToShow.map((bus) => (
                  <BusCard data={bus} key={bus.id}></BusCard>
              ))}
              {filtered.length > 5 && (
                  <button
                      className="text-blue-600 underline text-sm cursor-pointer"
                      onClick={() => setExpand((prev) => !prev)}
                  >
                      {expand ? "Show less" : `Show all (${filtered.length})`}
                  </button>
              )}
          </div>
      </>
    );
}

export default UpcomingBuses;