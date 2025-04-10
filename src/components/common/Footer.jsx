import { linklist } from "../../assets/data/data";

export const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box">
            <a href="/" className="footer-logo">Portfolio</a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="copy-text">
            <p>
              &copy; 2024 All rights reserved by 
              <a href="#" target="_blank"> Md Shoaib </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
