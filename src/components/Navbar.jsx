
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
      <ul className={styles["links-container"]}>
        <li>Home</li>
        <li>About Us</li>
        <li className={styles["dropdown"]} >
          <div className={styles["dropbtn"]} >Packages From</div>
          <div className={styles["dropdown-container"]} >
            <p>Hyderabad</p>
            <p>Banglore</p>
            <p>Pune</p>
            <p>Chandigarh</p>
            <p>Gurgaon</p>
          </div>
        </li>
        <li className={styles["dropdown"]} >
        <div className={styles["dropbtn"]} >Packages</div>
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
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
