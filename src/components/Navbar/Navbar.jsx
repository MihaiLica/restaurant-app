import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
    } catch (error) {
      console.error("Error code:", error.code, "Message:", error.message);
      
      switch(error.code) {
        case "auth/popup-closed-by-user":
          alert("You closed the login popup. Please try again.");
          break;
        case "auth/unauthorized-domain":
          alert("Domain not authorized - check Firebase settings");
          break;
        default:
          alert(`Login failed: ${error.message}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setToggleMenu(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.perinita} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        {user ? (
          <div className="user__info">
            {user.photoURL && (
              <img 
                src={user.photoURL} 
                alt={user.displayName} 
                className="user__avatar"
              />
            )}
            <button onClick={handleLogout} className="logout__btn">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={handleGoogleLogin} className="login__btn">
            Login with Google
          </button>
        )}
        <a href="/" className="book-table__btn">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#FFD700" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className="overlay__close" 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li>
                {user ? (
                  <button 
                    onClick={handleLogout}
                    className="mobile-logout__btn"
                  >
                    Logout
                  </button>
                ) : (
                  <button 
                    onClick={handleGoogleLogin}
                    className="mobile-login__btn"
                  >
                    Login with Google
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;