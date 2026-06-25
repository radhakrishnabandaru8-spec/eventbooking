import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <h2>🎟 EventHub</h2>

          <p>
            Book concerts, workshops,
            seminars and festivals
            with ease.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/history">History</Link>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>📧 eventhub@gmail.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Hyderabad, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 EventHub. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;