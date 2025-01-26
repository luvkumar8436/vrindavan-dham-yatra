import styles from "./PackageFromPage.module.css"
import { fromData } from './toursFromData'
import Package from "./Package"
import { useLocation } from "react-router-dom";

const PackageFromPage = () => {

    const location = useLocation();
    const locationURL = location.pathname.split("/")[1];

    return (
        <div className={styles["container"]} >
            <div className={styles["img-container"]} >
                <h1>{`Tour Packages From ${locationURL.split("-")[3].charAt(0).toUpperCase() + locationURL.split("-")[3].substring(1)}`}</h1>
            </div>
            <div className={styles["package-outer-container"]} >
                <h2>{`Packages from ${locationURL.split("-")[3].charAt(0).toUpperCase() + locationURL.split("-")[3].substring(1)}`} </h2>
                <div className="package-container" >
                    {fromData.filter(data => data.fromLocation.toLowerCase() === locationURL.split("-")[3]).map( (item, key) => 
                        <Package
                        tourHeadline={item.tourHeadline}
                        tourPlaces={item.tourPlaces}
                        rating={item.rating}
                        image={item.image}
                        packageLink={`/${locationURL}/`}
                        duration={item.duration}
                        tourData={item.tourData}
                        key={key}
                        carouselImages={item.carouselImages}
                        />
                    
                    ) }
                </div>
            </div>
        </div>

    )
}

export default PackageFromPage;