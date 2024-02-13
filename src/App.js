import { Routes, Route } from "react-router-dom";
import DoctorsDashboard from "./doctors-app/doctors-dashboard";
import Patients from "./doctors-app/patients";
import Appointment from "./doctors-app/appointment";
import "./App.css";
import Signup from "./authentication/signup";
import PatientsDashboard from "./patients-app/patients-dashboard";

function App() {
  return (
    <Routes>

      <Route to='/' element={<Signup/>}/>
      <Route path="doctor" element={<DoctorsDashboard />} />
      <Route path="/doctor/patients" element={<Patients />} />
      <Route path="/doctor/appointment" element={<Appointment />} />

      <Route path='patient' element ={<PatientsDashboard/>}/>

   
     
     
  
      
    </Routes>
  );
}

export default App;
