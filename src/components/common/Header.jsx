import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons
import { motion } from "framer-motion"; // Import motion for smooth animations

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  // Function to scroll to Contact Section when the button is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section"); // Find the Contact Section
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }); // Scroll to Contact Section smoothly
    }
  };

  return (
    <motion.header
      className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flexSB">
        {/* Logo (Text) */}
        <motion.div
          className="logo-box"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <NavLink to="/" className="portfolio-text">
            Portfolio
          </NavLink>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          className={`header-menu ${isMenuOpen ? "open" : ""}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <nav>
            <ul>
              {linklist.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * link.id }}
                >
                  <NavLink to={link.link}>{link.text}</NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="flexSB">
          <motion.div
            className="header-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* On "Hire me!" button click, scroll to the contact section */}
            <button onClick={scrollToContact} className="btn tj-btn-primary">
              Hire me!
            </button>
          </motion.div>

          {/* Menu Icon Toggle */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseOutline size={55} />
            ) : (
              <IoMenuOutline size={55} />
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
