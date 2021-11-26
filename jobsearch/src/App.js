import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Company from "./components/company/Company";
import Favorite from "./components/favoriteJobs/Favorite";
import MySearchHome from "./components/home/MySearchHome";
/* import JobDetails from "./components/JobDetails"; */

import MyNavBar from "./components/MyNavBar";
import { useState, useEffect } from "react";
import FavoriteIndicator from "./components/favoriteJobs/FavoriteIndicator";
import { connect } from "react-redux";
import { getJobsAction } from "./actions";

const mapStateToProps = (state) => ({
  jobInJobList: state.jobs.jobList,
  jobsError: state.jobs.isError,
  jobsLoading: state.jobs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (text) => {
    dispatch(getJobsAction(text));
  },
});

const App = ({ getJobs, jobInJobList, jobsError, jobsLoading }) => {
  const [text, setText] = useState({
    text: "",
  });
  const [jobs, setJobs] = useState([]);
  /*  const fetchJobs = async () => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${text.text}&limit=10`
      );
      if (response.ok) {
        let jobData = await response.json();
        setJobs(jobData.data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    /*  fetchJobs(); */
    getJobs(text);
  }, []);

  return (
    <BrowserRouter>
      {/* <Link to="/:company">
        <MyNavBar />
      </Link> */}
      <MyNavBar text={text} setText={setText} getJob={getJobs} />
      {/* <div className="d-flex justify-content-end">
        <FavoriteIndicator />
      </div> */}
      <Routes>
        <Route
          path="/"
          exact
          element={<MySearchHome jobs={jobInJobList} setJobs={jobInJobList} />}
        />
        <Route path="/:company" exact element={<Company />} />
        <Route path="/favorite" exact element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
