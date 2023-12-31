import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const REST_API_KEY = "c8be748be694cad38049c4bffb002b6c";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">로그인</h1>
      <button>
        <h1>
          <Link to={KAKAO_AUTH_URL}>Kakao Login</Link>
        </h1>
      </button>
    </div>
  );
};

export default Login;
