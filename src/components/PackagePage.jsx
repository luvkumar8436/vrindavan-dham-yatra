import React from "react";
import { useParams } from 'react-router-dom';
import DemoCarousel from "./DemoCarousel";
import styles from './PackagePage.module.css'
import { useLocation } from "react-router-dom";
import BasicTabs from "./LabTabs";
import CallbackForm from "./CallbackForm";
// import { tourItnerayData } from "./toursData";
import { data } from "./toursData";
import { fromData } from './toursFromData'
import { useEffect } from "react";

const PackagePage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    let {packageName} = useParams();
    const location = useLocation();
    const locationURL = location.pathname.split("/")[1].split("-");
    console.log(location)
    console.log(locationURL)
    let duration , places, tourData, carouselImages;
    if (location.state === null) { 
        // console.log(data.filter( data_obj => data_obj.tourHeadline === packageName.split("-").join(" ")))
        if (locationURL[0] === "tour" && locationURL[1] === "packages" && locationURL[2] === "from"){
            ({duration, tourPlaces:places , tourData , carouselImages} = fromData.filter( data_obj => data_obj.tourHeadline === packageName.split("-").join(" "))[0] );
        }else{
            ({duration, tourPlaces:places , tourData , carouselImages} = data.filter( data_obj => data_obj.tourHeadline === packageName.split("-").join(" "))[0] );
        }
        // console.log(duration, places , tourData);
    }else{
        ({duration , places, tourData, carouselImages } = location.state);
    }
    return (
        <div>
            <div className={styles["package-page-container"]}>
                <DemoCarousel carouselImages={carouselImages}/>
                
                <div className={styles["form-container"]}>
                    <CallbackForm text="Request Call"/>
                </div>
                <div className={styles["plan-info-container"]}>
                    <h2 className={styles["tour-heading"]} >
                        {packageName.split("-").join(" ")}
                    </h2>
                    <div className={styles["day-box"]} >
                        <p>{duration}</p>
                        <p>{places} </p>
                    </div>
                    <div className={styles["line-break"]}></div>
                    <div className={styles["heading"]}>
                        Tour Highlights
                    </div>
                    <ul className={styles["heading-ul"]}>
                        {tourData.highlights.map( (highlight, i ) => <li key={i} >{highlight}</li> )}
                    </ul>
                    <div className={styles["line-break"]}></div>
                    <div className={styles["heading"]}>
                        Tour Itenary
                    </div>
                    <BasicTabs data={tourData.itenary} />
                    {
                            tourData.moments !== undefined ?
                            <>
                                <div className={`${styles["heading"]} ${styles["mom"]}`}>
                                Memorable Moments
                                </div>
                                <ul className={styles["heading-ul"]}>
                                {tourData.moments.map( (mem, i ) => <li key={i} >{mem}</li> )}
                                </ul>
                                <div className={styles["line-break"]}></div>
                            </> :
                            <></>
                    }
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