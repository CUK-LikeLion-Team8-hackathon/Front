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
      <div>
        <h2 className="text-center text-5xl md:text-3xl sm:text-2xl my-10">
          게시판입니다.
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul>
              {boardList.map((board) => (
                <li key={board.idx}>
                  <Link to={`/board/${board.idx}`}>{board.title}</Link>
                </li>
              ))}
            </ul>
            <div>
              <button onClick={moveToWrite}>글쓰기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
