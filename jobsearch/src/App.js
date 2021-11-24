import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Company from "./components/company/Company";
import MySearchHome from "./components/home/MySearchHome";
/* import JobDetails from "./components/JobDetails"; */

import MyNavBar from "./components/MyNavBar";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Link to="/:company">
        <MyNavBar />
      </Link> */}
      <Routes>
        <Route path="/" element={<MySearchHome />} />
        <Route path="/:company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
