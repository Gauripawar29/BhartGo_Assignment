import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>🛍️ ShopClone</Link>
      <div>
        {user ? (
          <>
            <span style={styles.user}>Hi, {user.name}</span>
            <Link to="/cart" style={styles.link}>Cart</Link>
            <button onClick={handleLogout} style={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", padding: "10px 20px",
    backgroundColor: "#333", color: "#fff",
  },
  logo: {
    fontSize: "20px", textDecoration: "none", color: "#fff",
  },
  link: {
    marginLeft: "15px", textDecoration: "none", color: "#fff",
  },
  logout: {
    marginLeft: "15px", padding: "5px 10px", cursor: "pointer",
  },
  user: {
    marginRight: "10px",
  }
};

export default Navbar;
