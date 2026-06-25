import { useLocation } from "react-router-dom";

import jsPDF from "jspdf";

const bookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

const latestBooking =
  bookings[bookings.length - 1];

function Confirmation() {
  if (!latestBooking) {
  return (
    <div className="confirmation">
      <h2>No Booking Found</h2>
    </div>
  );
}
  const downloadTicket = () => {

  const doc = new jsPDF();

  doc.setFontSize(22);
doc.text("EVENTHUB TICKET", 20, 20);

doc.setFontSize(14);

doc.text("Booking ID:", 20, 40);
doc.text(String(latestBooking.bookingId), 20, 50);

doc.text("Event:", 20, 65);
doc.text(latestBooking.eventName, 20, 75);

doc.text("Tickets:", 20, 90);
doc.text(String(latestBooking.tickets), 20, 100);

doc.text("Total Paid:", 20, 115);
doc.text("Rs. " + latestBooking.totalPrice, 20, 125);
  doc.save("EventHub-Ticket.pdf");

};
  return (
   <div className="confirmation">
  <div className="confirm-card">
      <h1>🎉 Booking Successful</h1>
     <h2>Booking ID: {latestBooking.bookingId}</h2>

<h3>🎟 Event: {latestBooking.eventName}</h3>

<h3>💵 Price Per Ticket: ₹{latestBooking.ticketPrice}</h3>

<h3>🎫 Tickets Booked: {latestBooking.tickets}</h3>

<h3>💰 Total Paid: ₹{latestBooking.totalPrice}</h3>

<h3>📅 Date: {latestBooking.bookingDate}</h3>

<h3>🕒 Time: {latestBooking.bookingTime}</h3>

<p style={{color:"green",fontWeight:"bold"}}>
✔ Your tickets have been booked successfully.
</p>
      
      
      <h3>
Thank you for choosing EventHub
</h3>
<button
  onClick={downloadTicket}
>
  Download Ticket
</button>

<button
  onClick={() =>
    window.location.href="/"
  }
>
  Back To Home
</button>
</div>
    </div>
  );
}

export default Confirmation;