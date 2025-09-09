import React from 'react';

const legendItems = [
    { color: 'bg-green-500', label: 'Arrived', border: 'border-green-500' },
    { color: 'bg-red-500', label: 'Late', border: 'border-red-500' },
    { color: 'bg-white', label: 'Not Arrived', border: 'border-gray-300' },
];

const BusLegend = () => {
    return (
        <div className="flex justify-between items-center w-full">
            <div></div>
            <div className="flex items-center gap-4">
                {legendItems.map(({ color, label, border }) => (
                    <div key={label} className="flex items-center gap-1.5">
                        <span
                            className={`inline-block w-4 h-4 rounded-md border ${color}`}
                        />
                        <span>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusLegend;
