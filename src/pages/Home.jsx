import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {

  const savedEvents =
    JSON.parse(localStorage.getItem("events")) || [];

  setEvents(savedEvents);

}, []);

  return (
    <>
      <section className="hero">

  <div className="hero-overlay">

    <div className="hero-left">

      <span className="hero-tag">
        DISCOVER • BOOK • ENJOY
      </span>

      <h1>
        Discover Events <br />
        That <span>Inspire You</span>
      </h1>

      <p>
        Find and book the best events,
        workshops, concerts, seminars and
        festivals happening around you.
      </p>

      <div className="hero-search">

        <input
          type="text"
          placeholder="Search for events..."
        />

        <button>
          🔍 Search
        </button>

      </div>
    </div>
    </div>
    </section>

    <section className="stats">

  <div className="stat-card">
    <div className="stat-icon">🎟️</div>
    <div>
      <h2>150+</h2>
      <p>Events</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">👥</div>
    <div>
      <h2>25K+</h2>
      <p>Users</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">🎫</div>
    <div>
      <h2>5000+</h2>
      <p>Bookings</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">📍</div>
    <div>
      <h2>20+</h2>
      <p>Cities</p>
    </div>
  </div>

</section>
      
        <section className="features">

  <h2>Why Choose EventHub?</h2>

  <div className="features-grid">

    <div className="feature-card">
      <h3>🎟 Easy Booking</h3>
      <p>Book your favorite events in seconds.</p>
    </div>
    

    <div className="feature-card">
      <h3>⚡ Instant Confirmation</h3>
      <p>Receive your booking confirmation instantly.</p>
    </div>

    <div className="feature-card">
      <h3>🔒 Secure Payments</h3>
      <p>Your bookings are safe and secure.</p>
    </div>

  </div>
  </section>

<section className="about">

  <div className="about-left">

    <h2>About EventHub</h2>

    <p>
      EventHub is your one-stop platform for
      discovering and booking amazing events.
      Explore workshops, concerts, seminars,
      festivals and much more with an easy,
      secure and modern booking experience.
    </p>

    <button>
      Learn More
    </button>

  </div>

  <div className="about-right">

    <div className="about-card">

      <h3>50+</h3>

      <p>Live Events Every Month</p>

    </div>

    <div className="about-card">

      <h3>100%</h3>

      <p>Secure Booking</p>

    </div>

  </div>

</section>
<section className="categories">

  <h2>Browse By Category</h2>

  <div className="category-box">

    <div className="category-card">
      <h3>🎵</h3>
      <h4>Concerts</h4>
      <p>Live music shows</p>
    </div>

    <div className="category-card">
      <h3>💻</h3>
      <h4>Workshops</h4>
      <p>Learn new skills</p>
    </div>

    <div className="category-card">
      <h3>🎓</h3>
      <h4>Seminars</h4>
      <p>Expert sessions</p>
    </div>

    <div className="category-card">
      <h3>🎉</h3>
      <h4>Festivals</h4>
      <p>Celebrate together</p>
    </div>

  <div className="category-card">
    <h3>🏢</h3>
    <h4>Conferences</h4>
    <p>Business & Tech events</p>
  </div>

  <div className="category-card">
    <h3>⚽</h3>
    <h4>Sports</h4>
    <p>Live sports events</p>
  </div>

  <div className="category-card">
    <h3>💡</h3>
    <h4>Hackathons</h4>
    <p>Coding competitions</p>
  </div>

  <div className="category-card">
    <h3>🖼️</h3>
    <h4>Exhibitions</h4>
    <p>Art & innovation shows</p>
  </div>


  </div>

</section>
     <section className="featured-events">
        <div className="section-heading">

  <h2>Featured Events</h2>

  <p>
    Discover our most popular upcoming events
  </p>

</div>

        <div className="event-grid">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;