import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";

const WritePostWithDate = () => {
  const [posts, setPosts] = useState([
    "이곳은 이용후기가 들어갈 부분입니다. 이곳은 용후기가 들어갈 부분입니다. 이곳은 이용후기가 들어갈 부분입니다.",
  ]);
  const [newPost, setNewPost] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [userName, setUserName] = useState("");
  const [isWriting, setIsWriting] = useState(false); // 글쓰기 폼 표시 여부 상태 추가

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleCancel = () => {
    setNewPost("");
    setSelectedDate("");
    setIsWriting(false); // 글쓰기 폼 숨김
  };

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      const postWithUserAndDate = `${
        userName ? userName + ": " : ""
      }${newPost} (${selectedDate})`;
      setPosts([...posts, postWithUserAndDate]);
      setNewPost("");
      setSelectedDate("");
      setIsWriting(false); // 글 작성 후 폼 숨김
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        {isWriting && (
          <input
            type="date"
            className="w-full mt-2 p-2 border rounded"
            value={selectedDate}
            onChange={handleDateChange}
          />
        )}
        {isWriting && (
          <input
            rows="8"
            className="w-full h-48 p-2 border rounded"
            value={newPost}
            onChange={handlePostChange}
            placeholder="이용후기를 작성해주세요"
            style={{ resize: "vertical" }}
          />
        )}
        {isWriting ? (
          <div className="flex justify-between">
            <button
              className="mt-2 py-1 px-3 text-black rounded border border-[#96A68C]  "
              onClick={handleCancel}
            >
              취소
            </button>
            <button
              className="mt-2 py-1 px-3 bg-[#96A68C] text-white rounded"
              onClick={handlePostSubmit}
            >
              등록
            </button>
          </div>
        ) : (
          <button
            className="mt-2 py-1 px-3  text-[#96A68C]"
            onClick={() => setIsWriting(true)} // 버튼을 클릭하면 글쓰기 폼 표시
          >
            <BsFillPencilFill />
          </button>
        )}
      </div>
      <div>
        <div className="flex items-center">
          <div className="flex-1 border-t-2 border-gray-500"></div>
          <h2 className="w-32 text-lg font-semibold mb-2 text-center bg-[#96A68C] text-white rounded-xl relative">
            이용후기
          </h2>
          <div className="flex-1 border-t-2 border-gray-500"></div>
        </div>

        <ul className="list-disc pl-6 list-none">
          {posts.map((post, index) => (
            <li key={index} className="mb-2">
              {post}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WritePostWithDate;
