import React from "react";
import "./Package.css"
import ContainedButtons from "./ContainedButtons";

const Package = (props) => {
    return (
        <div className="package">
            <img src={props.image} alt="" />
            <div className="package-container-info" >
                <div className="duration" >{props.duration}</div>
                <div className="rating">&#9733; {props.rating}</div>
                <div className="tour-headline">{props.tourHeadline}</div>
                <div className="tour-places" >{props.tourPlaces}</div>
                <ContainedButtons class="enquiry" text="Enquire Now" />
                <ContainedButtons class="info" text="Know More" />
            </div>
        </div>
    )
}

export default Package;