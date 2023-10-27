import React, {useState} from "react";

import Review from '../../components/reviews/Review';
import reviews from '../../assets/data/reviews';

const ReviewsPage = () => {
  const [person, setPerson] = useState(0);

  const nextHandler = () => {
    if(person >= (reviews.length - 1)) {
      setPerson(0);
    } else {
      setPerson(prevState => prevState + 1);
    }
  }

  const prevHandler = () => {
    if(person <= 0) {
      setPerson(reviews.length -1);
    } else {
      setPerson(preState => preState - 1);
    }
  };

  const randomHandler = () => {
    const randomNumber = Math.floor(Math.random() * reviews.length);

    if (randomNumber === person) {
        if (randomNumber >= (reviews.length - 1)) {
          return setPerson(0);
        }
        return setPerson(randomNumber + 1);
    }

    setPerson(randomNumber);
  }

  return (
    <section className="container">
        <h1 className="h1"><span>Reviews</span> App</h1>
        <Review 
            info={reviews[person]} 
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            randomHandler={randomHandler}
        />
    </section>
  );
};
export default ReviewsPage;
