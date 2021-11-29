import {
  Navbar,
  Button,
  FormControl,
  Nav,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteIndicator from "./favoriteJobs/FavoriteIndicator";
import { getJobsAction } from "../actions";

const MyNavBar = ({ text, setText, getJob }) => {
  return (
    <Navbar expand="lg" className="NavBar">
      <Navbar.Brand className="text-white" href="#home">
        Weenix JobEngine
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
          </Link>
          <Link to="/favorite">
            <Nav.Link className="text-white" href="#link">
              Favorite
            </Nav.Link>
          </Link>
          <FavoriteIndicator />
          <NavDropdown
            title="Dropdown"
            id="basic-nav-dropdown"
            style={{ color: "white!important" }}
          >
            <NavDropdown.Item className="text-white" href="#action/3.1">
              Marketing
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Finance / Legal
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Product</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Customer Service
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Software Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">
              Vatica Health
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">
              Nordcloud Global
            </NavDropdown.Item>
            {/*   <NavDropdown.Divider /> */}
            {/*   <NavDropdown.Item href="#action/3.7">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl
            value={text.text}
            type="text"
            onChange={(e) => setText({ ...text, text: e.target.value })}
            placeholder="Search for jobs"
            className="mr-sm-2"
          />
          <Button
            variant="outline-success"
            onClick={() => getJob(getJobsAction(text))}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavBar;
