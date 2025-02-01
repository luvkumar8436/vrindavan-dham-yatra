
import { Link, NavLink  } from 'react-router-dom';
// import logo from './images/Vrindavan_Dham_Yatra_Logo_Cleaned-removebg-preview.png';
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import { useState } from "react";
import { data } from './toursData';               
import {locations} from "./toursFromData.js"

const Navbar = () => {
  
  const [isOpen , setOpen] = useState(false);
  
  const hidden = isOpen ? "" : "hidden";

  const linksContainerClass = isOpen ? "links-container-mobile" : "links-container";
  const dropDownContainerClass = isOpen ? "dropdown-container-mobile" : "dropdown-container";
  
  function handleNavClick(event){
    setOpen(!isOpen);
    if(isOpen===true){
      event.target.parentNode.parentNode.childNodes[2].childNodes[2].childNodes[1].style.display = "";
      event.target.parentNode.parentNode.childNodes[2].childNodes[3].childNodes[1].style.display = "";
    }
  }

  function closeDropDown(event){
    console.log("event " , event)
    event.target.parentNode.parentNode.style.display = "";
    setOpen(false);
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

  }

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["brand-logo"]}>
        <NavLink  to={"/"}><Logo className={styles["logo"]} /></NavLink> 
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
        <NavLink 
        style={({ isActive }) => ({
            color: isActive
            ? "grey"
            : "black",
            listStyleType: 'none',
            textDecoration: 'none'
        })}
        to={"/"}><li>Home</li></NavLink>
        <li>
          <span onTouchStart={handleSubmenuClick}>Packages<div className={[styles["arrow"]]}>&#10095;</div></span>
          <div className={`${styles[`${dropDownContainerClass}`]}`} >
          {  data.map(  obj  => <Link to={"/tourist-packages/"+obj.tourHeadline.split(" ").join("-") } state={{ duration: obj.duration , places: obj.tourPlaces, tourData: obj.tourData , carouselImages: obj.carouselImages }} ><p onClick={closeDropDown} >{obj.tourHeadline}</p></Link> ) }
          </div>
        </li>
        <li >
          <span onTouchStart={handleSubmenuClick} >Packages From<div className={[styles["arrow"]]}>&#10095;</div></span>
          <div  className={`${styles[`${dropDownContainerClass}`]}`} >
            {locations.map( location => 
              (
                <>
                  <Link to={`/tour-packages-from-${location.toLowerCase()}/`} > <p onClick={closeDropDown}>{`${location}`}</p> </Link>
                </>
              )
             )}
          </div>
        </li>
        <NavLink 
        style={({ isActive }) => ({
            color: isActive
            ? "grey"
            : "black",
            listStyleType: 'none',
            textDecoration: 'none'
        })}
        to={"/about"}>
          <li>About</li>
        </NavLink>
        <NavLink 
        style={({ isActive }) => ({
            color: isActive
                ? "grey"
                : "black",
            listStyleType: 'none',
            textDecoration: 'none'
        })}
        to={"/contact"}>
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
