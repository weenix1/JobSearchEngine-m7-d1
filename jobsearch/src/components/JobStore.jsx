import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { useSelector, useDispatch } from "react-redux";

/* const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
  jobsError: state.jobs.isError,
  jobsLoading: state.jobs.isLoading,
}); */

/* const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (jobToAdd) => {
    dispatch(addToFavoriteAction(jobToAdd));
  },
}); */

const JobStore = () => {
  /*  const [jobs, setJobs] = useState([]); */
  const dispatch = useDispatch();
  const [jobSelected, setJobSelected] = useState(null);
  const jobs = useSelector((state) => state.jobs.jobList);
  console.log(jobs);
  const jobsError = useSelector((state) => state.jobs.isError);
  const jobsLoading = useSelector((state) => state.jobs.isLoading);

  return (
    <Row>
      {jobsLoading ? (
        ({
          /* <Spinner
          animation="border"
          variant="success"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        /> */
        },
        (
          <ReactPlaceholder type="text" rows={10} ready={false}>
            <JobCard />
          </ReactPlaceholder>
        ))
      ) : (
        <>
          {jobsError ? (
            <div>
              <Alert variant="danger">ERROR WHILE FETCHING</Alert>
            </div>
          ) : (
            jobs.map((job) => (
              <Col sm={6}>
                <ListGroup as="ul">
                  <ListGroup.Item as="li" className="mb-3">
                    <JobCard
                      job={job}
                      /* changeJob={changeJob} */
                      jobSelected={jobSelected}
                      addToFavorite={dispatch}
                    />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            ))
          )}
        </>
      )}
    </Row>
  );
};

export default JobStore;
//export default connect(mapStateToProps, mapDispatchToProps)(JobStore);
