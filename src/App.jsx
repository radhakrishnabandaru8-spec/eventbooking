import { useEffect } from "react";
import initialEvents from "./data/events";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventDetails from "./pages/EventDetails";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Auth from "./pages/Auth";
import AddEvent from "./pages/AddEvent";

import Confirmation from "./pages/Confirmation";

function App() {
  useEffect(() => {
  console.log(
    JSON.parse(localStorage.getItem("events"))
  );
}, []);
 useEffect(() => {
  if (!localStorage.getItem("events")) {
    localStorage.setItem(
      "events",
      JSON.stringify(initialEvents)
    );
  }
}, []);
  return (
    <BrowserRouter>
        <div className="app">
      <Navbar />
  <main className="main-content">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/events"
          element={<Events />}
        />
        <Route
  path="/events/:id"
  element={<EventDetails />}
/>
        <Route
  path="/booking/:id"
  element={<Booking />}
/>
<Route
  path="/history"
  element={<BookingHistory />}
/>
<Route
  path="/add-event"
  element={<AddEvent />}
/>
<Route
  path="/auth"
  element={<Auth />}
/>
<Route
  path="/confirmation"
  element={<Confirmation />}
/>

      </Routes>
    
      </main>
      <ToastContainer
  position="top-right"
  autoClose={2000}
/>
      <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
