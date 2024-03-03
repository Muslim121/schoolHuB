import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { FaBookOpen } from "react-icons/fa6";
import Main from "./pages/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
