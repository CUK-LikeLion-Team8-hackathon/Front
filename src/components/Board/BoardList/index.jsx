import axios from "axios";
import { useNavigate } from "react-router-dom";

const BoardList = ({ idx, title, contents, createdBy }) => {
  const navigate = useNavigate();

  const moveToUpdate = () => {
    navigate(`/update/` + idx);
  };

  const deleteBoard = async () => {
    if (window.confirm("게시글을 삭제하시겠습니까?")) {
      await axios.delete(`//localhost:8080/board/${idx}`).then((res) => {
        alert("삭제되었습니다.");
        navigate("/board");
      });
    }
  };
  const moveToList = () => {
    navigate("/board");
  };
  return (
    <div className="flex sm:block justify-center items-center h-screen">
      <div className="my-4 border border-gray-300 rounded p-4">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <h5 className="text-gray-600">{createdBy}</h5>
          <hr className="my-2" />
          <p className="text-gray-800">{contents}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={moveToUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            수정
          </button>
          <button
            onClick={deleteBoard}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            삭제
          </button>
          <button
            onClick={moveToList}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            게시물로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
