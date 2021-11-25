import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Company from "./components/company/Company";
import Favorite from "./components/favoriteJobs/Favorite";
import MySearchHome from "./components/home/MySearchHome";
/* import JobDetails from "./components/JobDetails"; */

import MyNavBar from "./components/MyNavBar";
import { useState, useEffect } from "react";
import FavoriteIndicator from "./components/favoriteJobs/FavoriteIndicator";

const App = () => {
  const [text, setText] = useState({
    text: "",
  });
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
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
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <BrowserRouter>
      {/* <Link to="/:company">
        <MyNavBar />
      </Link> */}
      <MyNavBar text={text} setText={setText} getJob={fetchJobs} />
      {/* <div className="d-flex justify-content-end">
        <FavoriteIndicator />
      </div> */}
      <Routes>
        <Route
          path="/"
          exact
          element={<MySearchHome jobs={jobs} setJobs={jobs} />}
        />
        <Route path="/:company" exact element={<Company />} />
        <Route path="/favorite" exact element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
