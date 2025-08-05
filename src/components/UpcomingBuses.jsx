import BusCard from "./BusCard";

const UpcomingBuses = ({ data }) => {
    return <>
        <h1>Upcoming Buses</h1>
        <div className="grid grid-cols-4 gap-4 font-semibold text-gray-600 px-4 py-2">
          <div>ID</div>
          <div>Bus Name</div>
          <div>Route</div>
          <div>Arrival</div>
        </div>
        <div className="flex flex-col gap-4">
        {data.map((row) => (
          <BusCard data={row} key={row.id}></BusCard>
        ))}
        </div>
    </>
}

export default UpcomingBuses;