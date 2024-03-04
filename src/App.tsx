import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Algebra from "./pages/Algebra";
import Biology from "./pages/Biology";
import Chemistry from "./pages/Chemistry";
import English from "./pages/English";
import Geography from "./pages/Geography";
import History from "./pages/History";
import Litarature from "./pages/Litarature";
import Music from "./pages/Music";
import Physics from "./pages/Physics";
import Geometry from "./pages/Geometry";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/main/algebra" element={<Algebra />}></Route>
        <Route path="/main/biology" element={<Biology />}></Route>
        <Route path="/main/chemistry" element={<Chemistry />}></Route>
        <Route path="/main/english" element={<English />}></Route>
        <Route path="/main/geograthy" element={<Geography />}></Route>
        <Route path="/main/history" element={<History />}></Route>
        <Route path="/main/literature" element={<Litarature />}></Route>
        <Route path="/main/music" element={<Music />}></Route>
        <Route path="/main/physics" element={<Physics />}></Route>
        <Route path="/main/geometry" element={<Geometry />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
