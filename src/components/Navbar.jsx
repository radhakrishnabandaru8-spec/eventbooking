import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  const user =
    JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/auth");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      <h2 className="logo">
🎟 <span>EventHub</span>
</h2>
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/events">Events</Link>

        <Link to="/history">My Bookings</Link>

        <Link to="/add-event">
          Add Event
        </Link>

      </div>

      <div className="nav-right">

        {
          isLoggedIn ? (

            <>
              <span className="username">
                👤 {user?.name}
              </span>

              <button
                onClick={handleLogout}
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link to="/auth">
                <button className="login-btn">
                  Login
                </button>
              </Link>

              <Link to="/auth">
                <button className="signup-btn">
                  Sign Up
                </button>
              </Link>
            </>

          )
        }

      </div>

    </nav>

  );

}

export default Navbar;