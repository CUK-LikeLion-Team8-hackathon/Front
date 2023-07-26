import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    createdBy: "",
    contents: "",
  });

  const { title, createdBy, contents } = board; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const saveBoard = async () => {
    await axios.post(`//localhost:8080/board`, board).then((res) => {
      alert("등록되었습니다.");
      navigate("/board");
    });
  };

  const backToList = () => {
    navigate("/board");
  };
  return (
    <div className="flex sm:block justify-center items-center h-screen">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-gray-800">제목</span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            className="ml-2 px-4 py-2 border rounded"
          />
        </div>
        <div className="flex items-center">
          <span className="text-gray-800">작성자</span>
          <input
            type="text"
            name="createdBy"
            value={createdBy}
            onChange={onChange}
            className="ml-2 px-4 py-2 border rounded"
          />
        </div>
        <div>
          <span className="text-gray-800">내용</span>
          <textarea
            name="contents"
            cols="30"
            rows="6"
            value={contents}
            onChange={onChange}
            className="block w-full border rounded px-4 py-2"
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={saveBoard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Like
          </button>
          <button
            onClick={backToList}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Speech
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
