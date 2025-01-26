
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import './DemoCarousel.css'
// import styles from './DemoCarousel.module.css'

function DemoCarousel(props) {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
    bsPrefix='demo'
    activeIndex={index} onSelect={handleSelect} fade>
        {
            props.carouselImages.map(
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