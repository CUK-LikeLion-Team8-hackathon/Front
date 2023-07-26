import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import classNames from "classnames";

const Post = () => {
  const navigate = useNavigate();

  const [boardList, setBoardList] = useState([]);
  const [pageList, setPageList] = useState([]);

  const [curPage, setCurPage] = useState(0); //현재 페이지 세팅
  const [prevBlock, setPrevBlock] = useState(0); //이전 페이지 블록
  const [nextBlock, setNextBlock] = useState(0); //다음 페이지 블록
  const [lastPage, setLastPage] = useState(0); //마지막 페이지
  const [search, setSearch] = useState({
    page: 1,
    sk: "",
    sv: "",
  });

  const getBoardList = async () => {
    if (search.page === curPage) return; //현재 페이지와 누른 페이지가 같으면 return

    const queryString = Object.entries(search)
      .map((e) => e.join("="))
      .join("&");

    const resp = await (
      await axios.get("//localhost:8080/board?" + queryString)
    ).data; // 2) 게시글 목록 데이터에 할당

    setBoardList(resp.data); // 3) boardList 변수에 할당
    const pngn = resp.pagination;

    const { endPage, nextBlock, prevBlock, startPage, totalPageCnt } = pngn;

    setCurPage(search.page);
    setPrevBlock(prevBlock);
    setNextBlock(nextBlock);
    setLastPage(totalPageCnt);

    const tmpPages = [];
    for (let i = startPage; i <= endPage; i++) {
      tmpPages.push(i);
    }

    setPageList(tmpPages);
  };

  const moveToWrite = () => {
    navigate("/write");
  };

  const onClick = (event) => {
    let value = event.target.value;
    setSearch({
      ...search,
      page: value,
    });

    getBoardList();
  };

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const onSearch = () => {
    if (search.sk !== "" && search.sv !== "") {
      setSearch({
        ...search,
        page: 1,
      });
      setCurPage(0);
      getBoardList();
    }
  };

  useEffect(() => {
    getBoardList(); // 1) 게시글 목록 조회 함수 호출
  }, [search]);

  return (
    <div className=" flex sm:block justify-center items-center h-screen">
      <div>
        <h2 className="text-center text-5xl md:text-3xl sm:text-2xl my-10">
          게시판입니다.
        </h2>
        <ul className="mb-4">
          {boardList.map((board) => (
            <li key={board.idx} className="mb-2">
              <Link
                to={`/board/${board.idx}`}
                className="text-blue-500 hover:underline"
              >
                {board.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2 mb-4">
          <button
            onClick={onClick}
            value={1}
            className={classNames("px-2 py-1 rounded", {
              "bg-blue-500 text-white": curPage === 1,
              "bg-gray-200 text-gray-600": curPage !== 1,
            })}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            onClick={onClick}
            value={prevBlock}
            className={classNames("px-2 py-1 rounded", {
              "bg-blue-500 text-white": curPage === prevBlock,
              "bg-gray-200 text-gray-600": curPage !== prevBlock,
            })}
          >
            <FaAngleLeft />
          </button>
          {pageList.map((page, index) => (
            <button
              key={index}
              onClick={onClick}
              value={page}
              className={classNames("px-2 py-1 rounded", {
                "bg-blue-500 text-white": curPage === page,
                "bg-gray-200 text-gray-600": curPage !== page,
              })}
            >
              {page}
            </button>
          ))}
          <button
            onClick={onClick}
            value={nextBlock}
            className={classNames("px-2 py-1 rounded", {
              "bg-blue-500 text-white": curPage === nextBlock,
              "bg-gray-200 text-gray-600": curPage !== nextBlock,
            })}
          >
            <FaAngleRight />
          </button>
          <button
            onClick={onClick}
            value={lastPage}
            className={classNames("px-2 py-1 rounded", {
              "bg-blue-500 text-white": curPage === lastPage,
              "bg-gray-200 text-gray-600": curPage !== lastPage,
            })}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <select
            name="sk"
            onChange={onChange}
            className="px-2 py-1 border rounded"
          >
            <option value="">-선택-</option>
            <option value="title">제목</option>
            <option value="contents">내용</option>
          </select>
          <input
            type="text"
            name="sv"
            id=""
            onChange={onChange}
            className="px-2 py-1 border rounded"
          />
          <button
            onClick={onSearch}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            검색
          </button>
        </div>
        <div>
          <button
            onClick={moveToWrite}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
