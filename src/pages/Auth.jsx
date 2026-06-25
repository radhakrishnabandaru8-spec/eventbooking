import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("user"));

      if (
        user &&
        user.email === email &&
        user.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    } else {
      const name = e.target.name.value;
      const confirmPassword =
        e.target.confirmPassword.value;

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const newUser = {
        name,
        email,
        password,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(newUser)
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>
          {isLogin
            ? "Login"
            : "Create Account"}
        </h1>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
            />
          )}

          <button type="submit">
            {isLogin
              ? "Login"
              : "Signup"}
          </button>

        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
            style={{
              color: "blue",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            {isLogin
              ? "Signup"
              : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;