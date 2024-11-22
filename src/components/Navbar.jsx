
// import { Link } from 'react-router-dom';
// import logo from './images/Vrindavan_Dham_Yatra_Logo_Cleaned-removebg-preview.png';
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  
  const [isOpen , setOpen] = useState(false);
  
  const hidden = isOpen ? "" : "hidden";

  const linksContainerClass = isOpen ? "links-container-mobile" : "links-container";
  const dropDownContainerClass = isOpen ? "dropdown-container-mobile" : "dropdown-container";
  
  function handleNavClick(event){
    setOpen(!isOpen);
  }

  function handleSubmenuClick(event){
    // console.log(event);
    let style;
    if(event.target.localName === "div"){
      style = event.target.parentNode.parentNode.childNodes[1].style;
    }else if(event.target.localName === "span"){
      style = event.target.parentNode.childNodes[1].style;
    }

    // console.log(style.display);
    if(style.display === ""){
      style.display = "block";
    }else{
      style.display = "";
    }
    // console.log(event.target.value); 
    // console.log(event.target.parentElement.parentElement.childNodes[1]);
    // const style = event.target.parentElement.parentElement.childNodes[1].style;
    // if(style.display===""){
    //   style.display = "block";
    // }else{
    //   style.display = "None";
    // }

    // console.log(event.target.parentElement.parentElement.childNodes[1])
  }

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["brand-logo"]}>
        <Logo className={styles["logo"]} />
      </div>
      <div  className={styles["nav-icon"]}>
        <div onClick={handleNavClick} className={styles["outer-div"]}>
          {
            !isOpen ? 
            <>
              <div></div>
              <div></div>
              <div></div>
            </>
             : <>&#x2716;</>
          }
        </div>
      </div>
      <ul className={`${styles[`${linksContainerClass}`]} ${styles[`${hidden}`]}`}>
        {
          isOpen ? <Logo /> : ""
        }
        <li>Home</li>
        <li>
          <span onClick={handleSubmenuClick}>Packages<div className={[styles["arrow"]]}>&#10095;</div></span>
          <div className={`${styles[`${dropDownContainerClass}`]}`} >
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
        <li >
          <span onClick={handleSubmenuClick} >Packages From<div className={[styles["arrow"]]}>&#10095;</div></span>
          <div  className={`${styles[`${dropDownContainerClass}`]}`} >
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
