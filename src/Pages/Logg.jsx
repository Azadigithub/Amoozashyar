import { useState } from "react";
import { loginUser } from "../API/auth";

export default function Logg() {

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await loginUser(identifier, password , res);

      // redirect after login
      window.location.href = "/";

    } catch (err) {
      setError("ll");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>

      <input
        placeholder="Student Code"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>

      {error && <p>{error}</p>}

    </form>
  );
}