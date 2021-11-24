import { Card } from "react-bootstrap";
import JobDetails from "./JobDetails";

const JobCard = ({ job, /* changeJob, */ jobSelected, navigate }) => (
  <Card
    // the ? is called OPTIONAL CHAINING
    className={jobSelected?._id === job._id ? "border-thick mt-3" : "mt-3"}
    /* onClick={() => navigate("/company")} */
    style={{ cursor: "pointer" }}
  >
    <Card.Body className="d-flex">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h6>{job.title}</h6>
        </div>
        <div>
          <Card.Text className="font-weight-bold">{job.company_name}</Card.Text>
        </div>
        <div>
          <p>{job.salary}</p>
        </div>
        <div>
          <p>{job.job_type}</p>
        </div>
        <div>
          <span>{job.candidate_required_location}</span>
        </div>
      </div>
    </Card.Body>
    <Card.Footer>{job.publication_date}</Card.Footer>
  </Card>
);

export default JobCard;
