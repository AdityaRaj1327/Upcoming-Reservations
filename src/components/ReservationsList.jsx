import { useState } from "react";
import ReservationCard from "./ReservationCard";
import initialReservations from "../data/reservations";

export default function ReservationsList() {
  const [reservations, setReservations] = useState(initialReservations);

  const handleCancel = (id) => {
    const user = {
      name: "Aditya Raj Singh",
      email: "adityrajsingh272003@gmail.com",
    };

    console.log(`User ${user.name} (${user.email}) cancelled reservation ID: ${id}`);
    alert(`Reservation #${id} cancelled!`);

    const updated = reservations.map((res) =>
      res.id === id ? { ...res, status: "Cancelled" } : res
    );
    setReservations(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center sm:text-left">
          Upcoming Reservations
        </h1>

        {reservations.map((reservation) => (
          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            onCancel={handleCancel}
          />
        ))}
      </div>
    </div>
  );
}
