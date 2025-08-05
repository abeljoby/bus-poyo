const BusCard = ({ data, idx }) => {
    return <tr key={idx}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td>{data.ET}</td>
    </tr>
}

export default BusCard;