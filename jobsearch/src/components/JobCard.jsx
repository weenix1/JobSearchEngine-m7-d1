import { Card, Container } from "react-bootstrap";
import JobDetails from "./JobDetails";
import { Link } from "react-router-dom";
import { addToFavoriteAction } from "../actions";

const JobCard = ({
  job,
  /* changeJob, */ jobSelected,
  addToFavorite,
  navigate,
}) => (
  <Container>
    {}
    <Card
      // the ? is called OPTIONAL CHAINING
      className={jobSelected?._id === job._id ? "border-thick mt-3" : "mt-3"}
      /* onClick={() => navigate("/company")} */
      style={{ cursor: "pointer" }}
    >
      <div className="card-body d-flex">
        <Card.Body className="d-flex">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to={`/${job._id}`}>
              <div>
                <h6>{job.title}</h6>
              </div>
            </Link>
            <div>
              <Card.Text className="font-weight-bold">
                {job.company_name}
              </Card.Text>
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

        <div
          className="loveSvg mr-2"
          onClick={() => addToFavorite(addToFavoriteAction(job))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-suit-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
          </svg>
        </div>
      </div>
      <Card.Footer className="card-footer">{job.publication_date}</Card.Footer>
    </Card>
  </Container>
);

export default JobCard;
