import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddEvent() {

  const navigate = useNavigate();
useEffect(() => {

  const editData =
    JSON.parse(localStorage.getItem("editEvent"));

  if(editData){

    setName(editData.name);
    setDate(editData.date);
    setVenue(editData.venue);
    setPrice(editData.price);
    setCategory(editData.category);
    setImage(editData.image);
    setDescription(editData.description);
    setSeats(editData.seats);

  }

},[]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Concert");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [seats, setSeats] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  const events =
    JSON.parse(localStorage.getItem("events")) || [];

  const newEvent = {
    id: Date.now(),
    name,
    date,
    venue,
    price: Number(price),
    category,
    image,
    description,
    seats: Number(seats)
  };

  const editData =
    JSON.parse(localStorage.getItem("editEvent"));

  if (editData) {

    const updatedEvents = events.map(event =>
      event.id === editData.id
        ? { ...newEvent, id: editData.id }
        : event
    );

    localStorage.setItem(
      "events",
      JSON.stringify(updatedEvents)
    );

    localStorage.removeItem("editEvent");

  } else {

    events.push(newEvent);

    localStorage.setItem(
      "events",
      JSON.stringify(events)
    );

  }

  alert("Event Saved Successfully");
  console.log(events);
  navigate("/events");
};


  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>Add Event</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Event Name"
             value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="date"
             value={date}
            onChange={(e)=>setDate(e.target.value)}
          />

          <input
            type="text"
            placeholder="Venue"
                value={venue}
            onChange={(e)=>setVenue(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            <option>Concert</option>
            <option>Workshop</option>
            <option>Seminar</option>
              <option>Festival</option>
  <option>Conference</option>
  <option>Sports</option>
  <option>Hackathon</option>
  <option>Exhibition</option>
          </select>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <input
            type="number"
            placeholder="Seats"
            value={seats}
            onChange={(e)=>setSeats(e.target.value)}
          />

          <button type="submit">
  {JSON.parse(localStorage.getItem("editEvent"))
    ? "Update Event"
    : "Add Event"}
</button>

        </form>

      </div>

    </div>

  );
}

export default AddEvent;