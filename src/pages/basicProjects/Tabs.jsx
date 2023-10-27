import React, {useState, useEffect} from "react";

const url = 'https://course-api.com/react-tabs-project';

import Loading from '../../components/tabs/Loading';
import TabsList from '../../components/tabs/TabsList';
import JobInfo from '../../components/tabs/JobInfo';

const TabsPage = () => {
  const [jobsData, setJobsData] = useState();
  const [activeJob, setActiveJob] = useState(0);
  const [companies, setCompanies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try{
        const response = await fetch(url);

        if (!response.ok) {
            setIsLoading(false);
            setIsError(true);
        }
        const data = await response.json();

        setJobsData(data);

        const companiesData = data.map( job => {
          return {
            company:job.company,
            order:job.order
          }
        });

        setCompanies(companiesData);

        setIsLoading(false);

    } catch(error) {
        setIsLoading(false);
        setIsError(true);
    }
  };

  useEffect( () => {
    fetchData();
  }, []);

  const activeJobHandler = (jobOrder) => {
    const newJob = jobsData.findIndex(item => item.order === jobOrder);

    setActiveJob(newJob);
    //console.log(newJob);
  };

  if (isLoading) {
    return (
      <section>
        <h1 className="h1"><span>Tabs</span> App</h1>
        <div className="message">
            <Loading />
            <h2>Loading...</h2>
        </div>
    </section>
    );
  }

  if (isError) {
    return (
      <section>
        <h1 className="h1"><span>Tabs</span> App</h1>
        <div className="message">
            <h2>There was an error!</h2>
        </div>
    </section>
    );
  }

  return (
    <section>
      <h1 className="h1"><span>Tabs</span> App</h1>
      <div className="jobs-center">
        <TabsList companies={companies} jobHandler={activeJobHandler} activejob={activeJob}/>
        <JobInfo info={jobsData[activeJob]} />
      </div>
    </section>
  );
};
export default TabsPage;
