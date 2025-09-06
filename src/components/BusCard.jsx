const BusCard = ({ data }) => {
    // Check if last_updated is today
    let isToday = false;
    let atPassed = false;
    let withinAT = false;
    try {
        if (data.last_updated && data.AT && data.ET) {
            const today = new Date();
            const lastUpdatedDate = new Date(data.last_updated.replace(' ', 'T'));
            isToday = lastUpdatedDate.getFullYear() === today.getFullYear() &&
                lastUpdatedDate.getMonth() === today.getMonth() &&
                lastUpdatedDate.getDate() === today.getDate();

            // Parse AT and ET (assume format HH:mm:ss or HH:mm)
            const [ath, atm] = data.AT.split(":");
            const [eth, etm] = data.ET.split(":");
            const atDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(ath), Number(atm), 0);
            const etDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(eth), Number(etm), 0);

            const diffMinutes = Math.abs((atDate - etDate) / (1000 * 60));
            atPassed = today > atDate;
            withinAT = diffMinutes <= 30;
        }
    } catch (e) {}

    function formatET(et) {
        if (!et) return "";
        const [h, m] = et.split(":").map(Number);
        if (isNaN(h) || isNaN(m)) return et;
        const hour12 = ((h + 11) % 12) + 1;
        const ampm = h >= 12 ? "pm" : "am";
        return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
    }

    const cardClass =
        "grid grid-cols-3 gap-2 items-center p-4 shadow-md rounded-lg border transition-opacity duration-700 opacity-0 animate-fadein " +
        (isToday && withinAT
            ? "bg-green-200"
            : isToday && atPassed
            ? "bg-red-200"
            : "bg-white");

    // Add fade-in animation via CSS
    // Place this in your global CSS or in a <style> tag if using CSS-in-JS
    // .animate-fadein { animation: fadein 0.7s forwards; }
    // @keyframes fadein { to { opacity: 1; } }

    return <div className={cardClass}>
        <div>{formatET(data.ET)}</div>
        {/* <div>{data.id}</div> */}
        <div>{data.name}</div>
        <div>{data.description}</div>
        {/* <div>{data.last_updated}</div> */}
    </div>
}

export default BusCard;