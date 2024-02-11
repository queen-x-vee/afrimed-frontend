import { Routes, Route } from "react-router-dom";
import DoctorsDashboard from "./doctors-app/doctors-dashboard";
import Patients from "./doctors-app/patients";
import Appointment from "./doctors-app/appointment";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DoctorsDashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
  );
}

export default App;
