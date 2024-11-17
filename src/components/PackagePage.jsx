import React from "react";
import { useParams } from 'react-router-dom';
import DemoCarousel from "./DemoCarousel";
import './PackagePage.css'
import { useLocation } from "react-router-dom";
import BasicTabs from "./LabTabs";

const highlights = [
    "Shree Krishna Janmasthan Temple",
    "Dwarkadhish Temple",
    "Banke Bihari Mandir",
    "Prem Mandir",
    "ISKCON Temple",
    "Barsana Temple",
    "Goverdhan",
    "Nandgaun",
    "Agra Tajmahal",
    "Rishikesh",
    "Haridwar",
    "Lakshman Jhula"];

const PackagePage = () => {
    let {packageName} = useParams();
    const location = useLocation();
    const {duration , places} = location.state;

    return (
        <div>
            <div className="package-page-container">
                <div className="slider-container">
                    <DemoCarousel />
                </div>
                <div className="plan-info-container">
                    <h2 className="tour-heading pt-serif-bold" >
                        {packageName}
                    </h2>
                    <div className="day-box" >
                        <p>{duration}</p>
                        <p>{places} </p>
                    </div>
                    <div className="line-break"></div>
                    <div className="heading">
                        Tour Highlights
                    </div>
                    <ul>
                    {
                        highlights.map(highlight => <li>{highlight}</li> )
                    }
                    </ul>
                    <div className="line-break"></div>
                    <div className="heading">
                        Tour Itenary
                    </div>
                    <BasicTabs />
                    <div className="inclusion-container">
                        <div className="heading">
                            Inclusions
                        </div>
                        <ol>
                            <li>Private air-conditioned vehicle for the entire tour</li>
                            <li>Pickup and drop-off at your preferred location</li>
                            <li>All fees and taxes included</li>
                            <li>Welcome drink and breakfast</li>
                            <li>Entry admission tickets to attractions (if applicable)</li>
                        </ol>
                        <div className="heading">
                            Exclusions
                        </div>
                        <ul>
                            <li>Personal expenses and services not mentioned in the package</li>
                        </ul>
                    </div>
                </div>
                  
            </div>

        </div>
        
    )
}


export default PackagePage;