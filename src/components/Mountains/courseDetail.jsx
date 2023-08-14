import React, { useState } from "react";
import kakaoMapImg from "@assets/kakaoMap.png";

const CourseDetails = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div>
      <div>
        <h2 className="text-[32px] sm:text-[28px] font-bold my-10 pb-3 border-b-[2px] border-[#6E7B65]">
          등산로 상세구간
        </h2>
        <div>
          {course.map((course, index) => (
            <div key={index} className="my-4">
              <div className="flex justify-between border-b-[1px] border-[#96A68B]">
                <h3 className="text-[24px] sm:text-[22px] text-start text-[#6E7B65] font-extrabold my-2 ">
                  {course.name}
                </h3>
                <button
                  className="bg-[#EAF3EC] px-4 rounded-lg text-[18px] sm:text-[12px] sm:mb-1 sm: mb-2 text-[#8F9D86]"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  정보보기
                </button>
              </div>
              {openIndex === index && (
                <>
                  <div className="p-6 xl:w-[850px] bg-[#C2D6B4] mt-2">
                    {course.description.map((item, idx) => (
                      <p key={idx} className="mb-2">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-row">
                    <div className="w-1/4 sm:w-1/2 h-[167px] sm:text-[14px] p-4 my-2 mr-2 bg-[#C2D6B4]">
                      <p>등산로 길이: {course.length}</p>
                      <p>상행시간: {course.upTime}</p>
                      <p>하행시간: {course.downTime}</p>
                      <p>등산 난이도: {course.level}</p>
                    </div>
                    <div className="w-3/4 sm:w-1/2 h-[167px] p-4 my-2 ml-2 bg-[#C2D6B4]">
                      <div>
                        <p className="text-[24px] mb-1 font-bold sm:text-[14px]">
                          등산코스 위치 보기
                        </p>
                        <a
                          target="_blank"
                          href={`https://map.kakao.com/link/to/${course.locationName},${course.latitued},${course.longitude}`}
                          rel="noreferrer"
                        >
                          <img
                            src={kakaoMapImg}
                            alt="kakao"
                            className="w-[350px] h-[87px] sm:mt-8 sm:h-[50px]"
                          />
                        </a>
                        {/* <KakaoMap /> */}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
