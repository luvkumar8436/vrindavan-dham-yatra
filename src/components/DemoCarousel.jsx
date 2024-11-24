
import premmandir from './images/prem-mandir7.jpg'
import kirtimandir from './images/indian-temple-g085a80a15_1920-1.jpg'
import barsana from './images/free-photo-of-people-at-shri-radha-rani-temple-in-barsana.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './DemoCarousel.css'
// import styles from './DemoCarousel.module.css'
const images = [
    {
        index: 1,
        name: premmandir,
        alt : "prem mandir"
    },
    {
        index: 2,
        name: kirtimandir,
        alt: "kirti mandir"
    },
    {
        index: 3,
        name: barsana,
        alt: "barsana"
    }
]

function DemoCarousel() {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
    bsPrefix='demo'
    activeIndex={index} onSelect={handleSelect} fade>
        {
            images.map(
                image =>  
                    <Carousel.Item key={image.index} >
                        <img src={image.name} alt={image.alt} />
                    </Carousel.Item>
                )  
            
        }
    </Carousel>
  );
}


export default DemoCarousel;