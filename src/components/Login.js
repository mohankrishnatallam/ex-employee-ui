import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // 🔁 Import Header

export default function Login() {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (empId.trim() && password.trim()) {
      localStorage.setItem("loggedInEmpId", empId);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Emp ID</label>
            <input
              type="text"
              name="empId"
              placeholder="Enter Emp ID"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.text}>
          Don't have an account?{" "}
          <button type="button" onClick={() => navigate("/signup")} style={styles.link}>
            Register
          </button>
        </p>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: 450,
    margin: "60px auto",
    backgroundColor: "#f0f8ff",
    padding: 30,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif"
  },
  title: {
    textAlign: "center",
    color: "#2b3e6c",
    marginBottom: 30
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  field: {
    marginBottom: 20
  },
  label: {
    display: "block",
    marginBottom: 6,
    color: "#2b3e6c",
    fontWeight: 600
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: 6
  },
  button: {
    marginTop: 10,
    padding: "10px",
    backgroundColor: "#2b3e6c",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },
  text: {
    textAlign: "center",
    marginTop: 20
  },
  link: {
    background: "none",
    color: "#2b3e6c",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline"
  }
};
