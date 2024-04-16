import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Restaurant from "./components/Body";
import resObj from "./Utilities/mockData";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Restaurant resObj={resObj} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
