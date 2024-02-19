import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  //ButtonBack,
  //ButtonNext,
  //DotGroup,
  //Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Testimonials() {
  return (
   <div className="bg-[#FCFCF7] py-10">
    <div className="text-center my-5 text-3xl font-bold text-[#020202]"> Testimonials</div>
     <div className="container mx-auto ">
      <div className=" hidden lg:flex items-center justify-center w-full h-full text-[#FFFFFF]">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block  hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={4}
          visibleSlides={2.3}
          step={1}
          infinite={true}
          isPlaying={true}
          orientation="horizontal"
          interval={6000}
          playDirection={"forward"}
        >
          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-[1.15625rem]  items-center justify-start transition ease-out duration-700  "
                >
                  <Slide index={0}>
                    <div className="p-10 rounded  flex flex-col items-start justify-center gap-y-10 bg-white">
                      <p className=" font-normal text-[#6B6666] text-base  ">
                      "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
                      </p>
                      <div className="flex flex-col">
                        <span className="text-lg font-normal text-[#5D34F3]">Dr Micheal Alex</span>
                        <span className="text-sm font-normal text-[#6B6666]">Heart Surgeon</span>
                      </div>
                    </div>
                  </Slide>

                  <Slide index={1}>
                    <div className="p-10 rounded  flex flex-col items-start justify-center gap-y-10 bg-white">
                      <p className="font-normal text-[#6B6666] text-base  ">
                      "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
                      </p>
                      <div className="flex flex-col">
                        <span className="text-lg font-normal text-[#5D34F3]">Dr Micheal Alex</span>
                        <span className="text-sm font-normal text-[#6B6666]">Heart Surgeon</span>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="p-10 rounded  flex flex-col items-start justify-center gap-y-10 bg-white">
                      <p className="font-normal text-[#6B6666] text-base ] ">
                      "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
                      </p>
                      <div className="flex flex-col">
                        <span className="text-lg font-normal text-[#5D34F3]">Dr Micheal Alex</span>
                        <span className="text-sm font-normal text-[#6B6666]">Heart Surgeon</span>
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="p-10 rounded  flex flex-col items-start justify-center gap-y-10 bg-white">
                      <p className="font-normal text-[#6B6666] text-base ">
                      "AI Medic has transformed the way I interact with patients. The chatbot's ability to guide patients through symptom assessment is impressive. It helps bridge the gap between appointments, enabling continuous and proactive patient engagement. An excellent addition to modern healthcare practices."
                      </p>

                      <div className="flex flex-col">
                        <span className="text-lg font-normal text-[#5D34F3]">Dr Micheal Alex</span>
                        <span className="text-sm font-normal text-[#6B6666]">Heart Surgeon</span>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
   </div>
  );
}
