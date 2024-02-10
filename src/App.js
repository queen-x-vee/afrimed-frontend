import { Routes, Route } from "react-router-dom";
import DoctorsDashboard from "./doctors-app/doctors-dashboard";
import './App.css';

function App() {
  return (
   <Routes>
 <Route path='/' element={<DoctorsDashboard />} />  
   </Routes>
  );
}

export default App;
