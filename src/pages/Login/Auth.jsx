import React from "react";
const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div>
      <h1>sdd</h1>
      <h1>sdd</h1>
      <h1>sdd</h1>
      <h1>정보</h1>
      {code}
    </div>
  );
};
export default Auth;
