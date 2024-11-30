import React from "react";
import "./Package.css"
import ContainedButtons from "./ContainedButtons";
import { Link } from "react-router-dom";

const Package = (props) => {
    return (
        <div className="package">
            <img src={props.image} alt="" />
            <div className="package-container-info" >
                <div className="tour-subheading-container" >
                    <div className="duration" >{props.duration}</div>
                    <div className="rating">&#9733; {props.rating}</div>
                    <div className="tour-headline">{props.tourHeadline}</div>
                </div>
                <div className="tour-subinfo-container">
                    <div className="tour-places" >{props.tourPlaces}</div>
                    <div ><Link  ><ContainedButtons class="enquiry"  text="Enquire Now" /></Link></div>
                    <div ><Link to={"/tourist-packages/"+props.tourHeadline } state={{ duration: props.duration , places: props.tourPlaces , tourData: props.tourData}} > <ContainedButtons class="info" text="Know More" /></Link></div>
                </div>  
            </div>
        </div>
    )
}

export default Package;