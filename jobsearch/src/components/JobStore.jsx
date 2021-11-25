import { useState, useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToFavoriteAction } from "../actions";

const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (jobToAdd) => {
    dispatch(addToFavoriteAction(jobToAdd));
  },
});

const JobStore = ({ jobs, addToFavorite }) => {
  /*  const [jobs, setJobs] = useState([]); */
  const [jobSelected, setJobSelected] = useState(null);

  return (
    <Row>
      {jobs.map((job) => (
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
      ))}
    </Row>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(JobStore);
