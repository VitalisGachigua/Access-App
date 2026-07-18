import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import CompanyDashboard from "./pages/CompanyDashboard";
import Opportunities from "./pages/Opportunities";
import OpportunityDetails from "./pages/OpportunityDetails";
import CreateOpportunity from "./pages/CreateOpportunity";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/opportunity/:id" element={<OpportunityDetails />} />
        <Route path="/create-opportunity" element={<CreateOpportunity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;