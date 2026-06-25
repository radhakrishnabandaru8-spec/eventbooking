import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";

function Events() {
  const navigate = useNavigate();
const [events, setEvents] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
useEffect(() => {

  const savedEvents =
    JSON.parse(localStorage.getItem("events")) || [];

  setEvents(savedEvents);

}, []);
const deleteEvent = (id) => {
  

  const confirmDelete =
    window.confirm(
      "Delete this event?"
    );

  if (!confirmDelete) return;

  const updatedEvents =
    events.filter(
      event => event.id !== id
    );

  setEvents(updatedEvents);

  localStorage.setItem(
    "events",
    JSON.stringify(updatedEvents)
  );
};
const editEvent = (event) => {

  localStorage.setItem(
    "editEvent",
    JSON.stringify(event)
  );

  navigate("/add-event");

};
  const filteredEvents = events.filter((event) => {

    const matchSearch =
      event.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      event.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="events-page">

      <div className="events-header">
        <h1>Explore Events</h1>

        <p>
          Discover workshops, concerts,
          seminars and festivals.
        </p>
      </div>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Event"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Workshop</option>
          <option>Concert</option>
          <option>Seminar</option>
          <option>Festival</option>
  <option>Conference</option>
  <option>Sports</option>
  <option>Hackathon</option>
  <option>Exhibition</option>
        </select>

      </div>

      {filteredEvents.length === 0 && (
        <h2 style={{ textAlign: "center" }}>
          No Events Found
        </h2>
      )}

      <div className="event-grid">
        {filteredEvents.map((event) => (
         <EventCard
  key={event.id}
  event={event}
  onDelete={deleteEvent}
  onEdit={editEvent}
/>
        ))}
      </div>

    </div>
  );
}

export default Events;