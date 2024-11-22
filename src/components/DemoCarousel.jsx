
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import premmandir from './images/prem-mandir7.jpg'
import kirtimandir from './images/indian-temple-g085a80a15_1920-1.jpg'
import barsana from './images/free-photo-of-people-at-shri-radha-rani-temple-in-barsana.jpeg'
import './DemoCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

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
  return (
    <Carousel className="carousel" fade>
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