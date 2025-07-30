export default function ReservationCard({ reservation, onCancel }) {
  const { id, venueName, date, time, partySize, status } = reservation;

  const handleClick = () => {
    if (status !== "Cancelled") {
      onCancel(id);
    }
  };

  const statusColor = {
    Confirmed: "text-green-600",
    Pending: "text-yellow-500",
    Cancelled: "text-red-500",
  }[status] || "text-gray-600";

  return (
    <div
      className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
    >
      {/* Info Section */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{venueName}</h2>
        <p className="text-sm text-gray-500">
          {date} at {time} &middot; Party of {partySize}
        </p>
        <p className={`text-sm font-medium ${statusColor}`}>{status}</p>
      </div>

      {/* Action Button */}
      <button
        onClick={handleClick}
        disabled={status === "Cancelled"}
        className={`mt-2 sm:mt-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          status === "Cancelled"
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600 active:scale-95"
        }`}
      >
        {status === "Cancelled" ? "Cancelled" : "Cancel"}
      </button>
    </div>
  );
}
