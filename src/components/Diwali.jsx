import './Diwali.css'
import React from "react"; 
import ContainedButtons from "./ContainedButtons";

const Diwali = () => {
    return (
        <div className='diwali-main-container'>
            <div className="diwali-container">
                <div className='diwali-inside-container' >
                    <div className='diwali-heading'>
                    Celebrate this Diwali in Mathura Vrindavan.
                    </div>
                    <div className='diwali-para'>
                        Book packages from our website and we will make sure that you will get the best tour experience of your life with us and make this journey memorable for you.
                        <ContainedButtons class="offer-btn"  text="Avail offer" />
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Diwali;