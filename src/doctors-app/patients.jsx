import React from 'react'

const recentPatients = [
    {
      
      patientName: "paul williams",
      id: "1",
      gender: "male",
      visited: "12/12/2021",
      action: "Completed",
    },
    {
     
      patientName: "paul williams",
      id: "2",
      gender: "male",
      visited: "12/12/2021",
      action: "Completed",
    },
    {
      
      patientName: "paul williams",
      id: "3",
      gender: "male",
      visited: "12/12/2021",
      action: "Completed",
    },
    {
     
      patientName: "paul williams",
      id: "4",
      gender: "male",
      visited: "12/12/2021",
      action: "Completed",
    },
    {
     
      patientName: "paul williams",
      id: "5",
      gender: "male",
      visited: "12/12/2021",
      action: "Completed",
    },
  ];

const Patients = () => {
  return (
    <div>
        <div className=" pt-2 grid grid-cols-3 gap-y-10 gap-x-5">
                <div className="p-4 col-span-2 bg-white">
                  {recentPatients.map((patient) => {
                    return (
                      <div
                        key={patient.id}
                        className="grid grid-cols-4 my-7 gap-x-6 border-b border-gray-300"
                      >
                        <span className="flex  justify-center items-center">{patient.patientName}</span>

                        <span className="flex  justify-center items-center">{patient.gender}</span>
                        <span  className="flex  justify-center items-center">{patient.visited}</span>
                        <span  className="flex  justify-center items-center">{patient.action}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-white"></div>
              </div>
    </div>
  )
}

export default Patients