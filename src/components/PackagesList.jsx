import React from "react";
import "./PackagesList.css"
import Package from "./Package";
import prem_mandir_img from './images/prem-mandir-night.jpg'
import kirti_mandir_img from './images/kirti-mandir.jpeg'
import gokul from './images/Sages-Kutiyas-at-Raman-Reti-Places-To-Visit-in-Gokul-Govardhan.jpg'
import parikrama from './images/parikrama.jpg'
import taj from './images/taj.jpg'
import agrafort from './images/pexels-kabita-darlami-16871795-819x1024.jpg'
import indiaGate from './images/indiaGate.webp'
import haridwar from './images/haridwar-01.jpg'
import akshardham from './images/41724497151854.jpg'

const data = [
    {
        tourHeadline:"One day Mathura Vrindavan Yatra",
        tourPlaces:"Mathura-Vrindavan",
        rating: `5 (121)`,
        image:prem_mandir_img,
        duration:"1 Day",
    },
    {
        tourHeadline:"Weekend Special Vrindavan Dhan Yatra",
        tourPlaces:"Mathura-Vrindavan-Goverdhan-Gokul-Barsana",
        rating: `5 (220)`,
        image:kirti_mandir_img,
        duration:"2 Days & 1 Night",
    },
    {
        tourHeadline:"Sampoorna Brij Darshan",
        tourPlaces:"Mathura-Vrindavan-Goverdhan-Gokul-Barsana",
        rating: `5 (342)`,
        image:gokul,
        duration:"3 Days & 2 Night",
    },
    {
        tourHeadline:"Brijdham darshan and Parikrama",
        tourPlaces:"Mathura-Vrindavan-Goverdhan-Gokul-Barsana",
        rating: `5 (356)`,
        image:parikrama,
        duration:"3 Days & 2 Night",
    },
    {
        tourHeadline:"Taj and Agra Fort Tour",
        tourPlaces:"Agra-Mathura-Vrindavan-Goverdhan-Gokul-Barsana",
        rating: `5 (234)`,
        image:taj,
        duration:"2 Days & 1 Night",
    },
    {
        tourHeadline:"Agra and Mathura Tour",
        tourPlaces:"Agra-Mathura-Vrindavan-Goverdhan-Gokul-Barsana",
        rating: `5 (234)`,
        image:agrafort,
        duration:"4 Days & 3 Night",
    },
    {
        tourHeadline:"1 week Delhi Agra & Complete Brij Tour",
        tourPlaces:"Delhi-Agra-Mathura-Vrindavan",
        rating: `5 (189)`,
        image:indiaGate,
        duration:"7 Days & 6 Night",
    },
    {
        tourHeadline:"7 Days Delhi Haridwar Rishikesh Agra Mathura Vrindavan",
        tourPlaces:"Delhi-Haridwar-Rishikesh-Agra-Mathura-Vrindavan",
        rating: `4.6 (233)`,
        image:haridwar,
        duration:"7 Days & 6 Night",
    },
    {
        tourHeadline:"2 Days Delhi & Agra Tour",
        tourPlaces:"Delhi-Agra",
        rating: `4.6 (123)`,
        image:akshardham,
        duration:"2 Days & 1 Night",
    },
]

const PackagesList = () => {
    return (
        <div className="package-section" >
            <h2><span id="first">Best</span> <span id="second">Seller</span> <span id="third">Packages</span></h2>
            <div className="break-line"></div>
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