const BusCard = ({ data }) => {
    return <div
        className="grid grid-cols-4 gap-4 items-center bg-white p-4 shadow-md rounded-lg border"
    >
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.description}</div>
        <div>{data.ET}</div>
    </div>
}

export default BusCard;