import { BrowserRouter, Routes, Route } from "react-router-dom";
import ITJobs from "./pages/ITJobs";
import Finance from "./pages/Finance";
import Navbar from "./Navbar/Navbar";
import Home from "./Pages/Home.jsx";
// import Hero from "./Hero/Hero.jsx";

import JobDetail from "./Pages/JobDetails";
import FinanceJobDetail from "./Pages/FinanceJobDetail";
import EngineerJobDetail from "./Pages/EngineerJobsDetails.jsx";
import EngineerJobs from "./Pages/EngineerJobs.jsx";

import MarketJobList from "./Pages/MarketJobList.jsx";
import MarketJobDetail from "./Pages/MarketJobsDetail.jsx";

import RemoteJobDetail from "./Pages/RemoteJobDetails.jsx";
import RemoteJobList from "./Pages/RemoteJobList.jsx";

import FresherJobs from "./Pages/FresherJobs.jsx";
import FresherJobDetail from "./Pages/FresherJobDetail.jsx";

import HealthcareJobList from "./Pages/HealthcareJobList.jsx";
import HealthcareJobDetail from "./Pages/HealthcareJobDetail.jsx";

import SalesJobList from "./Pages/SalesJobList.jsx";
import SalesJobDetail from "./Pages/SalesJobDetail.jsx";

import InternshipJobList from "./Pages/InternshipJobList.jsx";
import InternshipJobDetail from "./Pages/InternshipJobDetail.jsx";

import FullTimeJobList from "./Pages/FullTimeJobList.jsx";
import FullTimeJobDetail from "./Pages/FullTimeJobDetail.jsx";

import PartTimeJobList from "./Pages/PartTimeJobList.jsx";
import PartTimeJobDetail from "./Pages/PartTimeJobDetail.jsx";

import FreelanceJobList from "./Pages/FreelanceJobList.jsx";
import FreelanceJobDetail from "./Pages/FreelanceJobDetail.jsx";

import BankingJobList from "./Pages/BankingJobList.jsx";
import BankingJobDetail from "./Pages/BankingJobDetail.jsx";

import InternationalJobList from "./Pages/InternationalJobList.jsx";
import InternationalJobDetail from "./Pages/InternationalJobDetail.jsx";

import OfflineTraining from "./Pages/OfflineTraining.jsx";
import OnlineTraining from "./Pages/OnlineTraining.jsx";
import Certifications from "./Pages/Certifications.jsx";

import CourseDetails from "./Pages/CourseDetails";
import OfflineCourseDetails from "./Pages/offline-course.jsx";

import Footer from "./Footer/Footer.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Hero /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/it-jobs" element={<ITJobs />} />
        <Route path="/finance-jobs" element={<Finance />} />
        <Route path="/engineer-jobs" element={<EngineerJobs />} />

        <Route path="/it-job/:id" element={<JobDetail />} />
        <Route path="/finance-job/:id" element={<FinanceJobDetail />} />
        <Route path="/engineer-job/:id" element={<EngineerJobDetail />} />

        <Route path="/market-jobs" element={<MarketJobList />} />
        <Route path="/market-job/:id" element={<MarketJobDetail />} />

        <Route path="/remote-jobs" element={<RemoteJobList />} />
        <Route path="/remote-job/:id" element={<RemoteJobDetail />} />

        <Route path="/fresher-jobs" element={<FresherJobs />} />
        <Route path="/fresher-job/:id" element={<FresherJobDetail />} />

        <Route path="/healthcare-jobs" element={<HealthcareJobList />} />
        <Route path="/healthcare-job/:id" element={<HealthcareJobDetail />} />

        <Route path="/sales-jobs" element={<SalesJobList />} />
        <Route path="/sales-job/:id" element={<SalesJobDetail />} />

        <Route path="/internship-jobs" element={<InternshipJobList />} />
        <Route path="/internship-job/:id" element={<InternshipJobDetail />} />

        <Route path="/full-time-jobs" element={<FullTimeJobList />} />
        <Route path="/full-time-job/:id" element={<FullTimeJobDetail />} />

        <Route path="/part-time-jobs" element={<PartTimeJobList />} />
        <Route path="/part-time-job/:id" element={<PartTimeJobDetail />} />

        <Route path="/freelance-jobs" element={<FreelanceJobList />} />
        <Route path="/freelance-job/:id" element={<FreelanceJobDetail />} />

        <Route path="/banking-jobs" element={<BankingJobList />} />
        <Route path="/banking-job/:id" element={<BankingJobDetail />} />

        <Route path="/international-jobs" element={<InternationalJobList />} />
        <Route path="/international-job/:id" element={<InternationalJobDetail />} />

        <Route path="/training/online" element={<OnlineTraining />} />
        <Route path="/training/offline" element={<OfflineTraining />} />
        <Route path="/training/certifications" element={<Certifications />} />

        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/offline-course/:id" element={<OfflineCourseDetails />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;