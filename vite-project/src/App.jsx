import { Routes, Route } from "react-router-dom";

import "./App.css";
import EmploymentSolutionLanding from "./Pages/EmploymentSolutionLanding";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import OutsourcedPayrollLanding from "./Pages/OutsourcedPayrollLanding";
import SeekingOut from "./Pages/SeekingOut";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/EmploymentSolution"
          element={<EmploymentSolutionLanding />}
        />
        <Route
          path="/OutsourcedPayroll"
          element={<OutsourcedPayrollLanding />}
        />
        <Route path="/SeekingOut" element={<SeekingOut />} />
        <Route path="/OurStory" element={<OurStory />} />
      </Routes>
    </div>
  );
}

export default App;
