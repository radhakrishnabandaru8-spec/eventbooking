import { useEffect, useState } from "react";

function BookingHistory() {

  const [bookings, setBookings] = useState([]);

  const deleteBooking = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmDelete) return;

    const updatedBookings =
      bookings.filter(
        booking => booking.id !== id
      );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  useEffect(() => {

  const currentUser =
    JSON.parse(localStorage.getItem("user"));

  const allBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const myBookings =
    allBookings.filter(
      booking =>
        booking.userEmail === currentUser.email
    );

  setBookings(myBookings);

}, []);

  return (

    <div className="history">

      <h1>Booking History</h1>

      {
        bookings.length === 0
        ? <h3>No Bookings Found</h3>
        : bookings.map((booking) => (

          <div
            key={booking.id}
            className="history-card"
          >

            <h3>{booking.name}</h3>

            <p>Email: {booking.email}</p>

            <p>Phone: {booking.phone}</p>

            <p>Event: {booking.eventName}</p>

            <p>Tickets: {booking.tickets}</p>
            <p>
  Booking ID:
  {booking.bookingId}
</p>
            <button
  onClick={() =>
    deleteBooking(booking.id)
  }
>
  Cancel Booking
</button>

          </div>

        ))
      }

    </div>

  );
}

export default BookingHistory;