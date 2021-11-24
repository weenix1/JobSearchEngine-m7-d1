import { useState, useEffect } from "react";
import JobStore from "../JobStore";
import MyNavBar from "../MyNavBar";
import { useNavigate } from "react-router-dom";

const MySearchHome = () => {
  const navigate = useNavigate();
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
    <>
      <MyNavBar text={text} setText={setText} getJob={fetchJobs} />
      <JobStore jobs={jobs} setJobs={setJobs} />
    </>
  );
};

export default MySearchHome;
