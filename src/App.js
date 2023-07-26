import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "@components/Layout/layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Logout from "@pages/Logout";
import Auth from "@pages/Login/Auth";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
