import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

const Company = () => {
  const [companyData, setCompanyData] = useState([]);
  const company = useParams().company;
  const getCompanies = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`
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
            <h5>Company name:{c.company_name}</h5>
            <span>Job title:{c.title}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default Company;
