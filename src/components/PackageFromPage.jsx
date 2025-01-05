import styles from "./PackageFromPage.module.css"
import { fromData } from './toursFromData'
import Package from "./Package"

const PackageFromPage = () => {
    return (
        <div className={styles["container"]} >
            <div className={styles["img-container"]} >
                <h1>Tour Packages From Hyderabad</h1>
            </div>
            <div className={styles["package-outer-container"]} >
                <h2>Packages from Hyderabad </h2>
                <div className="package-container" >
                    {fromData.map( (item, key) => 
                        <Package
                        tourHeadline={item.tourHeadline}
                        tourPlaces={item.tourPlaces}
                        rating={item.rating}
                        image={item.image}
                        packageLink={"/tour-packages-from-hyderabad/"}
                        duration={item.duration}
                        tourData={item.tourData}
                        key={key}
                        />
                    
                    ) }
                </div>
            </div>
        </div>

    )
}

export default PackageFromPage;