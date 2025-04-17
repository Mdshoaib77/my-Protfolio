import { FaXTwitter } from "react-icons/fa6";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data/data";

// Import Framer Motion for animations
import { motion } from "framer-motion";

export const Hero = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaXTwitter size={17} />,
    },
    {
      id: 2,
      icon: <PiDribbbleLogoFill size={20} />,
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} />,
    },
    {
      id: 4,
      icon: <IoLogoGithub size={20} />,
    },
  ];

  return (
    <>
      <section className="hero-section">
        {/* Intro Text Animation */}
        <motion.div
          className="intro_text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </motion.div>

        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                {/* Hero Sub Title with Motion */}
                <motion.span
                  className="hero-sub-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  I am Md Shoaib
                </motion.span>

                {/* Hero Title with Motion */}
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                  Web Developer +<br />
                  UI Designer
                </motion.h1>

                {/* Hero Image Box (Visible only in medium screens and up) */}
                <div className="hero-image-box d-md-none text-center">
                  <motion.img
                    src="assets/img/hero/me.png"
                    alt=""
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>

                {/* Hero Description */}
                <motion.p
                  className="lead"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                >
                  I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                </motion.p>

                {/* Buttons and Social Icons */}
                <motion.div
                  className="button-box flexG"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                  <a
                    href="/Resume.pdf"
                    download="Md_Shoaib_Resume"
                    className="btn tj-btn-secondary"
                  >
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        <a href="#">{icon.icon}</a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <motion.img
                  src="../images/common/profile1.jpg"
                  alt="profile"
                  style={{ width: "400px", height: "500px", objectFit: "cover" }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                />
              </div>
            </div>
          </div>

          {/* Fun Fact Area */}
          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <motion.div
                className="funfact-item"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 + index * 0.2 }}
              >
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
