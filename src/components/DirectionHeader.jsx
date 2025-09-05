import LiveClock from './LiveClock';

const DirectionHeader = ({ direction, setDirection }) => {
    return (
        <>
        <div className="flex justify-between sticky top-0 bg-white">
            <span>Your current direction: {direction}</span>
            {/* <LiveClock /> */}
        </div>
        </>
    )
};

export default DirectionHeader;