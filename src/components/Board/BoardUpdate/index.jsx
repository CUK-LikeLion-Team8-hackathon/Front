import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardUpdate = () => {
  const navigate = useNavigate();
  const { idx } = useParams(); // /update/:idx와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [board, setBoard] = useState({
    idx: 0,
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

  const getBoard = async () => {
    const resp = await (await axios.get(`//localhost:8080/board/${idx}`)).data;
    setBoard(resp.data);
  };

  const updateBoard = async () => {
    await axios.patch(`//localhost:8080/board`, board).then((res) => {
      alert("수정되었습니다.");
      navigate("/board/" + idx);
    });
  };

  const backToDetail = () => {
    navigate("/board/" + idx);
  };

  useEffect(() => {
    getBoard();
  }, []);

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
            readOnly={true}
            className="ml-2 px-4 py-2 border rounded bg-gray-100"
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
            onClick={updateBoard}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            수정
          </button>
          <button
            onClick={backToDetail}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdate;
