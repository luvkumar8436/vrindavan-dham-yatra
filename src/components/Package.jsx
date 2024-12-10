import React from "react";
import styles from "./Package.module.css"
import { Link } from "react-router-dom";

const Package = (props) => {
    return (
        <div className={styles["package"]}>
            <img src={props.image} alt="" />
            <div className={styles["package-container-info"]} >
                <div className={styles["tour-subheading-container"]} >
                    <div className={styles["duration"]} >{props.duration}</div>
                    <div className={styles["rating"]}>&#9733; {props.rating}</div>
                    <div className={styles["tour-headline"]}>{props.tourHeadline}</div>
                </div>
                <div className={styles["tour-subinfo-container"]}>
                    <div className={styles["tour-places"]} >{props.tourPlaces}</div>
                    <Link  ><button className={styles["enquiry"]}  text="">Enquire Now</button></Link>
                    <Link to={"/tourist-packages/"+props.tourHeadline.split(" ").join("-") } state={{ duration: props.duration , places: props.tourPlaces , tourData: props.tourData}} > <button className={styles["info"]}>Know More</button></Link>
                </div>  
            </div>
        </div>
    )
}

export default Package;