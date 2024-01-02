import React from "react";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;