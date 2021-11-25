import { connect } from "react-redux";
import { Card, ListGroup, Container, Button } from "react-bootstrap";
import { removeFromFavoriteAction } from "../../actions";

const mapStateToProps = (state) => ({
  favorite: state.favorite.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (indexToRemove) => {
    dispatch(removeFromFavoriteAction(indexToRemove));
  },
});

const Favorite = ({ favorite, removeFromFavorite }) => {
  console.log("here is favorite", favorite);
  return (
    <div>
      {favorite &&
        favorite.map((job, i) => (
          <div>
            <Container className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    <h5>{job.company_name}</h5>
                  </Card.Title>

                  <Card.Link href={job.url}>Job Link</Card.Link>
                  <Button
                    variant="danger"
                    className="ml-2"
                    onClick={() => removeFromFavorite(i)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        ))}
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
