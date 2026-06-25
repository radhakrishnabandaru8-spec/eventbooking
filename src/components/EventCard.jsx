import { Link } from "react-router-dom";

function EventCard({ event, onDelete, onEdit }) {
  return (
    <div className="card">

      <img
        src={event.image}
        alt={event.name}
      />

      <div className="card-content">

        <h2>{event.name}</h2>

        <p>📅 {event.date}</p>

        <p>📍 {event.venue}</p>

        <div className="price-row">

          <span className="price">
            ₹{event.price}
          </span>

        </div>

        <Link to={`/events/${event.id}`}>
  <button>
    View Details
  </button>
</Link>

{onDelete && (
  <button
    onClick={() => onDelete(event.id)}
    style={{
      background: "red",
      marginTop: "10px"
    }}
  >
    Delete Event
  </button>
)}

{onEdit && (
  <button
    onClick={() => onEdit(event)}
    style={{
      background: "orange",
      marginTop: "10px"
    }}
  >
    Edit Event
  </button>
)}


      </div>

    </div>
  );

}
export default EventCard;