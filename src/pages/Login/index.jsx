import React from "react";

const Login = () => {
  const REST_API_KEY = "c8be748be694cad38049c4bffb002b6c";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <button
          className="items-center bg-yellow-300 cursor-pointer text-16 py-3 border-radius-5 "
          onClick={handleLogin}
        >
          카카오 간편로그인하기
        </button>
      </div>
    </div>
  );
};

export default Login;
