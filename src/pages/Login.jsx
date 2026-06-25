import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    alert("Login Successful");
  };

  return (
    <div className="auth-container">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;