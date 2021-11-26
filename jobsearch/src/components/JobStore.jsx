import { useState, useEffect } from "react";
import { Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavoriteAction } from "../actions";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
  jobsError: state.jobs.isError,
  jobsLoading: state.jobs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (jobToAdd) => {
    dispatch(addToFavoriteAction(jobToAdd));
  },
});

const JobStore = ({ jobs, addToFavorite, jobsLoading, jobsError }) => {
  /*  const [jobs, setJobs] = useState([]); */
  const [jobSelected, setJobSelected] = useState(null);

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
                      addToFavorite={addToFavorite}
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

export default connect(mapStateToProps, mapDispatchToProps)(JobStore);
