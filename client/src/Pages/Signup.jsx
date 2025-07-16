import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Account created! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.form}>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: { display: "flex", justifyContent: "center", marginTop: "50px" },
  form: { width: "300px", display: "flex", flexDirection: "column" },
  input: { marginBottom: "15px", padding: "10px", fontSize: "16px" },
  button: { padding: "10px", backgroundColor: "#333", color: "#fff" },
  error: { color: "red", marginTop: "10px" }
};

export default Signup;
