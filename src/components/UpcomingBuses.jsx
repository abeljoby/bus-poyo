import BusCard from "./BusCard";


const UpcomingBuses = ({ data }) => {
    // Get current time as minutes since midnight
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    // Filter buses with ET within 30 minutes before or after now
    const filtered = data.filter((bus) => {
        // Assume bus.ET is in 'HH:mm' format
        if (!bus.ET) return false;
        const [h, m] = bus.ET.split(":").map(Number);
        if (isNaN(h) || isNaN(m)) return false;
        const busMinutes = h * 60 + m;
        return (busMinutes - nowMinutes) >= -30;
    });

    return <>
        <div className="grid grid-cols-5 gap-2 font-semibold text-gray-600 px-4 py-2">
          <div>ID</div>
          <div>Bus Name</div>
          <div>Route</div>
          <div>ETA</div>
          <div>Arrived Time</div>
        </div>
        <div className="flex flex-col gap-2">
        {filtered.map((bus) => (
          <BusCard data={bus} key={bus.id}></BusCard>
        ))}
        </div>
    </>
}

export default UpcomingBuses;