// import northImg from '../assets/northbound-stop.png';
import northImg from '../assets/northbound_resize.jpg';
// import southImg from '../assets/southbound-stop.png';
import southImg from '../assets/southbound_resize.jpg';

const DirectionSelect = ({ direction, setDirection }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-bold">Select your direction:</h3>
            <div className="flex gap-4">
                <button
                    className={`w-[180px] h-[320px] rounded-lg cursor-pointer border transition-all duration-150 ${
                        direction === 'southbound'
                            ? 'border-blue-600 ring-2 ring-blue-200'
                            : 'border-gray-300'
                    }`}
                    style={{
                        backgroundImage: `url(${southImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => setDirection('southbound')}
                    aria-pressed={direction === 'southbound'}
                >
                    <span className="sr-only">Southbound</span>
                </button>
                <button
                    className={`w-[180px] h-[320px] rounded-lg cursor-pointer border transition-all duration-150 ${
                        direction === 'northbound'
                            ? 'border-blue-600 ring-2 ring-blue-200'
                            : 'border-gray-300'
                    }`}
                    style={{
                        backgroundImage: `url(${northImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={() => setDirection('northbound')}
                    aria-pressed={direction === 'northbound'}
                >
                    <span className="sr-only">Northbound</span>
                </button>
            </div>
            {direction === "northbound" ? (
                <p className="text-lg font-bold">
                    Northbound — Towards: Kannanchira, Njaliyakuzhi, Puthupally, Kottayam, Pala
                </p>
            ) : (
                <p className="text-lg font-bold">
                    Southbound — Towards: Thengana, Cheeranchira, Chanaganassery, Thiruvalla
                </p>
            )}
        </div>
    );
};

export default DirectionSelect;