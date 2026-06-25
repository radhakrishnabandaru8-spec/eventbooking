
import { useParams, useNavigate } from "react-router-dom";
function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
const events =
  JSON.parse(localStorage.getItem("events")) || [];
   const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return <h2>Event Not Found</h2>;
  }

  return (
    <div className="details-page">

   <div className="details-container">

<h1>{event.name}</h1>

<p>{event.description}</p>

<hr />

<h3>📅 {event.date}</h3>

<h3>📍 {event.venue}</h3>

<h3>💰 ₹{event.price}</h3>
<h3>
  Seats Available: {event.seats}
</h3>

<h3>👨‍💼 EventHub Team</h3>

      <button
  onClick={() => {

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {

      navigate(
        `/booking/${event.id}`
      );

    } else {

      alert(
        "Please Login First"
      );

      navigate("/auth");

    }

  }}
>
  Book Ticket
</button>
    </div>
    </div>
  );
}

export default EventDetails;