import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login";

import GlobalStyle from "./style/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <main className="App__body">
          <Routes>
            <Route path="login/*" element={<Login />} />
          </Routes>
        </main>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};

export default App;
