import React from "react";
import "./PackagesList.css"
import Package from "./Package";
import {data } from './toursData'


const PackagesList = () => {
    return (
        <div className="package-section" >
            <div className="bundle-container">
                <div className="bundle">
                    <h2>Best selling Packages</h2>
                    <div className="break-line"></div>
                </div>
            </div>
            
            <div className="package-container" >
                {data.map( (item, key) => 
                    <Package
                    tourHeadline={item.tourHeadline}
                    tourPlaces={item.tourPlaces}
                    rating={item.rating}
                    image={item.image}
                    duration={item.duration}
                    key={key}
                    />
                
                ) }
            </div>
            
        </div>
    )
}

export default PackagesList;