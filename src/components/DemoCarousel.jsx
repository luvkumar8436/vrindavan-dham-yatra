
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import premmandir from './images/prem-mandir7.jpg'
import kirtimandir from './images/indian-temple-g085a80a15_1920-1.jpg'
import barsana from './images/free-photo-of-people-at-shri-radha-rani-temple-in-barsana.jpeg'
import './DemoCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

const images = [
    {
        name: premmandir,
        alt : "prem mandir"
    },
    {
        name: kirtimandir,
        alt: "kirti mandir"
    },
    {
        name: barsana,
        alt: "barsana"
    }
]

function DemoCarousel() {
  return (
    <Carousel className="carousel" fade>
        {
            images.map(
                image =>  
                    <Carousel.Item>
                        <img src={image.name} alt={image.alt} />
                    </Carousel.Item>
                )  
            
        }
    </Carousel>
  );
}


export default DemoCarousel;