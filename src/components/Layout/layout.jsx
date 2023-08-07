import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <main className="my-20 lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto"> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
