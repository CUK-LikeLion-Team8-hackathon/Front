import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BoardList from "../BoardList";

const BoardDetail = () => {
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState([]);
  const getBoard = async () => {
    const resp = await (await axios.get(`//localhost:8080/board/${idx}`)).data;
    setBoard(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <BoardList
          idx={board.idx}
          title={board.title}
          contents={board.contents}
          createdBy={board.createdBy}
        />
      )}
    </div>
  );
};

export default BoardDetail;
