import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
/* import {withRouter} from 'react-router-dom' */
import { useMatch } from "react-router-dom";

const Company = () => {
  const [companyData, setCompanyData] = useState([]);
  const company = useParams().company;
  console.log(company);
  const getCompanies = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?_id=${company}`
      );
      if (response.ok) {
        let jobData = await response.json();
        setCompanyData(jobData.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      {companyData.map((c) => (
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <h5>Company name:{c.company_name}</h5>
                </Card.Title>
                <Card.Text>
                  <span>Job title:{c.title}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Company;
