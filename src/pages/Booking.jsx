import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
function Booking() {

  const navigate = useNavigate();
  const { id } = useParams();
 
   const events =
  JSON.parse(localStorage.getItem("events")) || [];
  
const selectedEvent =
  events.find(
    event =>
      event.id === Number(id)
  );
  if (!selectedEvent) {
  return (
    <div className="booking">
      <h2>Event Not Found</h2>
    </div>
  );
}

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [tickets, setTickets] = useState("");
  const totalPrice =
  (Number(tickets) || 0) *
  (selectedEvent.price || 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !phone ||
      !tickets
    ) {
      toast.error("Please fill all fields");
      return;
    }
    if (phone.length !== 10) {
  toast.error("Enter a valid 10-digit phone number");
  return;
}
if (Number(tickets) < 1) {
  toast.error("Minimum 1 ticket required");
  return;
}
if (!email.includes("@")) {
  toast.error("Enter a valid email address");
  return;
}
if (Number(tickets) > selectedEvent.seats) {
  toast.error(
    `Only ${selectedEvent.seats} seats available`
  );
  return;
}

const booking = {
  id: Date.now(),
 bookingId:
"EVT" +
Math.floor(100000 + Math.random() * 900000),
  name,
  email,
  userEmail: JSON.parse(localStorage.getItem("user")).email || "",
  phone,
  eventName: selectedEvent?.name,
   ticketPrice: selectedEvent.price,
  tickets: Number(tickets),
  totalPrice,
  bookingDate: new Date().toLocaleDateString(),
  bookingTime: new Date().toLocaleTimeString()
};
   


    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    oldBookings.push(booking);

   
localStorage.setItem(
  "bookings",
  JSON.stringify(oldBookings)
);
const updatedEvents = events.map(event =>
  event.id === selectedEvent.id
    ? {
        ...event,
        seats: event.seats - Number(tickets)
      }
    : event
);

localStorage.setItem(
  "events",
  JSON.stringify(updatedEvents)
);

toast.success("Booking Successful!");

setTimeout(() => {
  navigate("/confirmation");
}, 1500);
};
  return (
    <div className="booking">

      <h1>Book Your Event</h1>
      <div className="event-info">

  <h3>
    🎟️ {selectedEvent?.name}
  </h3>

  <p>
    📅 {selectedEvent?.date}
  </p>

  <p>
    📍 {selectedEvent?.venue}
  </p>

  <p>
    💰 ₹{selectedEvent?.price}
  </p>

</div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Number of Tickets"
          value={tickets}
          onChange={(e) =>
            setTickets(e.target.value)
          }
        />
        <h3>
  Total Amount: ₹{totalPrice}
</h3>
<div className="summary">

  <h3>Booking Summary</h3>

  <p>Event: {selectedEvent?.name}</p>

  <p>Price: ₹{selectedEvent?.price}</p>

  <p>Tickets: {tickets || 0}</p>
  <p>
  Available Seats:
  {selectedEvent?.seats}
</p>

  <h2>Total: ₹{totalPrice}</h2>


</div>
        <button
  type="submit"
  disabled={!name || !email || !phone || !tickets}
>
  Confirm Booking
</button>
      </form>

    </div>
  );
}

export default Booking;