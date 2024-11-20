
// import { Link } from 'react-router-dom';
// import logo from './images/Vrindavan_Dham_Yatra_Logo_Cleaned-removebg-preview.png';
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["brand-logo"]}>
        <Logo className={styles["logo"]} />
      </div>
      <div className={styles["nav-icon"]}>
        <div className={styles["outer-div"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul className={styles["links-container"]}>
        <li>Home</li>
        <li>
          <span>Packages<div className={[styles["arrow"]]}></div></span>
          <div className={styles["dropdown-container"]} >
            <p>One day Mathura Vrindavan Yatra</p>
            <p>Weekend Special Vrindavan Dhan Yatra</p>
            <p>Sampoorna Brij Darshan</p>
            <p>Brijdham darshan and Parikrama</p>
            <p>Taj and Agra Fort Tour</p>
            <p>Agra and Mathura Tour</p>
            <p>1 week Delhi Agra & Complete Brij Tour</p>
            <p>7 Days Delhi Haridwar Rishikesh Agra Mathura Vrindavan</p>
            <p>2 Days Delhi & Agra Tour</p>
          </div>
        </li>
        <li>
          <span>Packages From<div className={[styles["arrow"]]}></div></span>
          <div className={styles["dropdown-container"]} >
            <p>Hyderabad</p>
            <p>Banglore</p>
            <p>Pune</p>
            <p>Chandigarh</p>
            <p>Gurgaon</p>
          </div>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
