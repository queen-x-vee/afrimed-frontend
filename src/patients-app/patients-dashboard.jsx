import React from "react";
import PatientNavbar from "../components/patients-components/PatientNavbar";
import "../index.css";
import PatientTopNavbar from "../components/patients-components/PatientTopNavbar";

//import Fourth from "../assests/doctors-dashboard-assets/fourthCard.svg";



const PatientsDashboard = () => {
  

  return (
    <>
      <div className=" h-full flex m-0 p-0">
        <PatientNavbar />
        <main className="md:ml-[20rem]  w-full bg-[#F7F7F7] ">
          <PatientTopNavbar />
          <div>
            <div className="px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-2">
                <div className="col-span-1 md:col-span-2 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 ">
                    <div className="bg-white">

                    </div>
                    <div className="bg-white"> 
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum accusamus omnis animi rem vel at provident. Nostrum consequuntur facilis, sunt inventore incidunt possimus voluptas, dolor, ullam consequatur placeat cupiditate temporibus!
                    </div>
                    
                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
                  <div>

                  </div>

                </div>
                <div className="col-span-1">
hiii
                </div>

              </div>
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PatientsDashboard;
