import BusCard from "./BusCard";

const DepartedBuses = ({ data }) => {
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

  return <>
    <h1 className="text-2xl font-semibold mt-6 mb-2">Departed Buses</h1>
    <div className="grid grid-cols-5 gap-2 font-semibold text-gray-600 px-4 py-2">
      <div>ETA</div>
      <div>ID</div>
      <div>Bus Name</div>
      <div>Route</div>
      <div>Arrival</div>
    </div>
    <div className="flex flex-col gap-2">
    {filtered.map((row) => (
      <BusCard data={row} key={row.id}></BusCard>
    ))}
    </div>
  </>
}

export default DepartedBuses;