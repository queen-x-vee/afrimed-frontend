import React from "react";
import Navbar from "../components/doctors-components/Navbar";
import "../index.css";
import TopNavbar from "../components/doctors-components/TopNavbar";
import AIChatComponent from "../components/doctors-components/AIChat";

const PatientsDashboard = () => {
  /*const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));

    console.log(e.target.result);
  };

  const data = {
    image: profileImage,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };*/
  const handleSubmit = async (e) => {
    alert('feauture coming soon');
    e.preventDefault();
  }
  return (
    <>
      <div className=" h-screen flex m-0 p-0 ">
        <Navbar />
        <main className="md:ml-[20rem]  w-full bg-[#F7F7F7] ">
          <TopNavbar />
          <div>
            <div className="px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
                <div className="col-span-1 md:col-span-2 ">
                  <div className="">
                    <div className="rounded-[30px] bg-[#E2E4F9] flex items-center justify-around p-1.5 md:w-3/5 mx-auto mb-4 md:mb-6">
                      <button className="bg-[#5D34F3] text-white py-2.5 px-6 font-medium text-base rounded-[20px]" onClick={handleSubmit}>
                        Upload Image
                      </button>
                      <span className="text-xs md:text-lg">
                        {" "}
                        AI prediction results
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 ">
                    <div className="bg-white rounded-lg">
                      <div className="flex items-center justify-center w-full mb-5">
                        <div className=" w-full h-[40vh] p-4">
                        <img
                              src={ 'https://storage.autogon.ai/a57e9050-0064-4b37-951e-b4eea5f3afa8.png'}
                              alt="preview"
                              className="w-full h-full"
                              />
                          {/*imagePreview && (
                            <img
                              src={imagePreview && imagePreview}
                              alt="preview"
                              className="w-full h-full"
                            />
                          )*/}
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full mb-5">
                        {/*<input
                          id="dropzone-file"
                          type="file"
                          accept="image/png, image/jpeg, image/jpg"
                          name="image"
                          className="hidden"
                          onChange={handleImageChange}
                        />*/}
                       <button onClick={handleSubmit}>
                       <label
                          htmlFor="dropzone-file"
                          className="text-[#1A73E8] flex items-center py-4 px-8 border border-[#DADCE0] "
                        >
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 12V3.85L4.9 6.45L3.5 5L8.5 0L13.5 5L12.1 6.45L9.5 3.85V12H7.5ZM2.5 16C1.95 16 1.47933 15.8043 1.088 15.413C0.696666 15.0217 0.500667 14.5507 0.5 14V11H2.5V14H14.5V11H16.5V14C16.5 14.55 16.3043 15.021 15.913 15.413C15.5217 15.805 15.0507 16.0007 14.5 16H2.5Z"
                              fill="#1A73E8"
                            />
                          </svg>
                          Add file
                        </label>
                       </button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg font-medium text-lg">
                    Hemorrhage Detected
                    </div>
                  </div>
                 
                  
                  
                </div>
                <div className="col-span-1">
                  <AIChatComponent/>
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
