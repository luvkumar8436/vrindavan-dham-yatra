import React from "react";
import { useParams } from 'react-router-dom';
import DemoCarousel from "./DemoCarousel";
import styles from './PackagePage.module.css'
import { useLocation } from "react-router-dom";
import BasicTabs from "./LabTabs";
import CallbackForm from "./CallbackForm";


const PackagePage = () => {
    let {packageName} = useParams();
    const location = useLocation();
    const {duration , places, tourData} = location.state;
    return (
        <div>
            <div className={styles["package-page-container"]}>
                <DemoCarousel />
                
                <div className={styles["form-container"]}>
                    <CallbackForm />
                </div>
                <div className={styles["plan-info-container"]}>
                    <h2 className={styles["tour-heading"]} >
                        {packageName}
                    </h2>
                    <div className={styles["day-box"]} >
                        <p>{duration}</p>
                        <p>{places} </p>
                    </div>
                    <div className={styles["line-break"]}></div>
                    <div className={styles["heading"]}>
                        Tour Highlights
                    </div>
                    <ul>
                        {tourData.highlights.map( (highlight, i ) => <li key={i} >{highlight}</li> )}
                    </ul>
                    <div className={styles["line-break"]}></div>
                    <div className={styles["heading"]}>
                        Tour Itenary
                    </div>
                    <BasicTabs data={tourData.itenary} />
        
                    <div className={styles["inclusion-container"]}>
                        <div className={styles["heading"]}>
                            Inclusions
                        </div>
                        <ol>
                            <li>Private air-conditioned vehicle for the entire tour</li>
                            <li>Pickup and drop-off at your preferred location</li>
                            <li>All fees and taxes included</li>
                            <li>Welcome drink and breakfast</li>
                            <li>Entry admission tickets to attractions (if applicable)</li>
                        </ol>
                        <div className={styles["heading"]}>
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