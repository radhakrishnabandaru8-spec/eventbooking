import { useState } from "react";

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = (e) => {

    e.preventDefault();

    if(!name || !email || !password){
      alert("Fill all fields");
      return;
    }

    alert("Account Created");
  };

  return (
    <div className="auth-container">

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

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
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;