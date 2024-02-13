import { Routes, Route } from "react-router-dom";
import DoctorsDashboard from "./doctors-app/doctors-dashboard";
import Patients from "./doctors-app/patients";
import Appointment from "./doctors-app/appointment";
import "./App.css";
import Signup from "./authentication/signup";
import PatientsDashboard from "./patients-app/patients-dashboard";
import Doctors from "./patients-app/doctors";

function App() {
  return (
    <Routes>

      <Route path='/' element={<Signup/>}/>
      <Route path="/doctor" element={<DoctorsDashboard />} />
      <Route path="/doctor/patients" element={<Patients />} />
      <Route path="/doctor/appointments" element={<Appointment />} />

      <Route path='/patient' element ={<PatientsDashboard/>}/>
      <Route path="/patient/doctors" element={<Doctors/>} />
      <Route path="/patient/messages" element={<Patients />} />

   
     
     
  
      
    </Routes>
  );
}

export default App;
