import northImg from '../assets/northbound-stop.png';
import southImg from '../assets/southbound-stop.png';

const DirectionSelect = ({ direction, setDirection }) => {
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>Select your direction:</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    style={{
                        width: 600,
                        height: 300,
                        backgroundImage: `url(${northImg})`,
                        backgroundSize: 'cover',
                        border: direction === 'northbound' ? '3px solid #007bff' : '1px solid #ccc',
                        borderRadius: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => setDirection('northbound')}
                    aria-pressed={direction === 'northbound'}
                >
                    <span style={{ display: 'none' }}>Northbound</span>
                </button>
                <button
                    style={{
                        width: 600,
                        height: 300,
                        backgroundImage: `url(${southImg})`,
                        backgroundSize: 'cover',
                        border: direction === 'southbound' ? '3px solid #007bff' : '1px solid #ccc',
                        borderRadius: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => setDirection('southbound')}
                    aria-pressed={direction === 'southbound'}
                >
                    <span style={{ display: 'none' }}>Southbound</span>
                </button>
            </div>
            {direction === "northbound" ?
                <p>Northbound — Towards: Kannanchira, Njaliyakuzhi, Puthupally, Kottayam, Pala</p>:
                <p>Southbound — Towards: Thengana, Cheeranchira, Chanaganassery, Thiruvalla</p>
            }
        </div>
        </>
    );
};

export default DirectionSelect;