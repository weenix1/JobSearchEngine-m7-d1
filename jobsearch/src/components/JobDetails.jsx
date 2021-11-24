import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class JobDetails extends Component {
  state = {
    job: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.jobSelected,
      });
    }
  }

  render() {
    return (
      <div className="mt-3">
        {this.state.job ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.job.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={12}>
                <p>
                  <span className="font-weight-bold">Description:</span>
                  {this.state.job.description}
                </p>
                <p>
                  <span className="font-weight-bold">salary:</span>
                  {this.state.job.salary}
                </p>
                <Button
                  color="primary"
                  onClick={() => {
                    // from here I want to be able to add this element to the cart
                    // so to interact with the cart[] living into App.js
                  }}
                >
                  Click to apply
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default JobDetails;
