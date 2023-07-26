import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "@components/Layout/layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Logout from "@pages/Logout";
import BoardDetail from "@components/Board/BoardDetail";
import BoardWrite from "@components/Board/BoardWrite";
import BoardUpdate from "@components/Board/BoardUpdate";
import Post from "@pages/Post";
import Auth from "@pages/Login/Auth";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/board" element={<Post />} />
          <Route path="/board/:idx" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/update/:idx" element={<BoardUpdate />} />

          <Route path="/oauth/kakao/callback" element={<Auth />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
