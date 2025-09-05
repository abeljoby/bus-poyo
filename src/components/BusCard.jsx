const BusCard = ({ data }) => {
    // Check if last_updated is today
    let isToday = false;
    let atPassed = false;
    try {
        if (data.last_updated && data.AT) {
            const today = new Date();
            const lastUpdatedDate = new Date(data.last_updated.replace(' ', 'T'));
            isToday = lastUpdatedDate.getFullYear() === today.getFullYear() &&
                lastUpdatedDate.getMonth() === today.getMonth() &&
                lastUpdatedDate.getDate() === today.getDate();

            // Parse AT (assume format HH:mm:ss)
            const [ath, atm] = data.AT.split(":");
            const atDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(ath), Number(atm), 0);
            atPassed = today > atDate;
        }
    } catch (e) {}

    function formatET(et) {
        if (!et) return "";
        const [h, m] = et.split(":").map(Number);
        if (isNaN(h) || isNaN(m)) return et;
        const hour12 = ((h + 11) % 12) + 1;
        const ampm = h >= 12 ? "PM" : "AM";
        return `${hour12}:${m.toString().padStart(2, "0")} ${ampm}`;
    }

    const cardClass =
        "grid grid-cols-3 gap-2 items-center p-4 shadow-md rounded-lg border transition-opacity duration-700 opacity-0 animate-fadein " +
        (isToday && atPassed ? "bg-green-200" : "bg-white");

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