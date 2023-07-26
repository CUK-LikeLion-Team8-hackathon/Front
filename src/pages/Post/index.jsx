import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBoardList = async () => {
    try {
      const resp = await axios.get("//localhost:8080/board");
      const boardData = resp.data.data;
      setBoardList(boardData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching board list:", error);
      setLoading(false);
    }
  };

  const moveToWrite = () => {
    navigate("/write");
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className="flex sm:block justify-center items-center h-screen">
      <div className=" my-10">
        <h2 className="text-5xl md:text-3xl sm:text-2xl">게시판입니다.</h2>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <div>
            <ul className="mt-4">
              {boardList.map((board) => (
                <li key={board.idx} className="mb-2">
                  <span className="text-left">{board.idx}. </span>
                  <Link
                    to={`/board/${board.idx}`}
                    className="text-blue-500 hover:underline"
                  >
                    {board.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={moveToWrite}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                글쓰기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
