import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styles from "./TestimonialSection.module.css"


function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}


const Review = () => {
  const [index, setIndex] = useState(0);
 
  const { name, image, text, location} = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  

  return (
    <article className={styles["review"]}>
        <div className={styles["inner-container"]}>
            <div className={styles["img-container"]}>
                <img src={image} alt={name} className={styles["person-img"]} />
                <span className={styles["quote-icon"]}>
                <FaQuoteRight />
                </span>
            </div>
            <h4 className={styles["author"]}>{name}</h4>
            <p className={styles["job"]}>{location}</p>
            <p className={styles["job"]}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className={styles["info"]}>{text}</p>
            <div className={styles["button-container"]}>
                <button className={styles["prev-btn"]} onClick={prevPerson}>
                <FaChevronLeft />
                </button>
                <button className={styles["next-btn"]} onClick={nextPerson}>
                <FaChevronRight />
                </button>
            </div>
        </div>
    </article>
  );
};

export default Review;