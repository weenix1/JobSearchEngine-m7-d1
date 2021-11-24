import { useState, useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";

const JobStore = ({ jobs }) => {
  /*  const [jobs, setJobs] = useState([]); */
  const [jobSelected, setJobSelected] = useState(null);

  /* const fetchJobs = async () => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10"
      );
      if (response.ok) {
        let jobData = await response.json();
        setJobs(jobData.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []); */

  /*  const changeJob = (job) => setJobSelected({ jobSelected: job }); */
  return (
    <Row>
      {jobs.map((job) => (
        <Col sm={6}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" className="mb-3">
              <Link to={`/${job.company_name}`}>
                <JobCard
                  job={job}
                  /* changeJob={changeJob} */
                  jobSelected={jobSelected}
                />
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      ))}
    </Row>
  );
};

export default JobStore;
