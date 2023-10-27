import React, {useState, useEffect} from "react";

import Tours from '../../components/tours/Tours';
import Loading from '../../components/tours/Loading'

const url = 'https://course-api.com/react-tours-project';

const ToursPage = () => {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchHandler = async () => {
    setIsLoading(true);
    try{
        const response = await fetch(url);

        if (!response.ok) {
            setIsError(true);
            setIsLoading(false);
        }

        const data = await response.json();

        setToursData(data);
        setIsLoading(false);

    } catch (error) {
        setIsError(true);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const refreshHandler = () => {
    fetchHandler();
  };

  const deleteHandler = (idData) => {
    const filterdData = toursData.filter((item) => item.id !== idData);

    setToursData(filterdData);
  };

  if (isLoading) {
    return (
        <section className="container">
            <h1 className="h1"><span>Tours</span> App</h1>
            <Loading />
        </section>
    );
  }

  if (isError) {
    return (
        <section className="container">
            <h2>Tours App</h2>
            <h3>There was an error!</h3>
        </section>
    );
  }

  if (toursData.length === 0 && !isLoading && !isError) {
    return (
      <section className="container">
        <h1 className="h1">No Tours Left</h1>
          <div className="refresh">
            <button className="btn" onClick={refreshHandler}>Refresh</button>
          </div>
      </section>
    );
  }

  return (
    <section className="container">
        <h1 className="h1"><span>Tours</span> App</h1>
        <Tours data={toursData} deleteTour={deleteHandler}/>
    </section>
  );
};
export default ToursPage;
