import "./navbar.css"
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../../context/AuthContext";



const Navbar = () => {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the user from local storage
    localStorage.removeItem('user');
    navigate("/login")
    // Redirect to the login page
  };
  const handleSignIn =()=>{
    navigate("/login")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
          <span className="logo">Auxolon Ilocos Norte Hotel/Stays Booking </span>
        </Link>

        {user ? user.username : (
        <div className="navItems">
          <button onClick={handleSignIn} className="navButton">Sign in/Register</button>
        </div>
        )}
        {user && 
         <div className="navItems">
          <button onClick={handleLogout} className="navButton">{user.username}LOGOUT</button>
        </div>}
       
      </div>
    </div>
  )
}

export default Navbar