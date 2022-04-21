import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import Sidepanel from "./components/sidepanel/Sidepanel";
import { useState } from "react";
import DashBoard from "./pages/dashboard/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Application from "./pages/Applications/Application";

function App() {
  return (
    <div className="MainContent d-flex justify-content-start m-0 p-0">
      <Sidepanel />
      <div className="container-fluid m-0 p-0 Main">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/dashboard" element={<DashBoard />} />
            <Route exact path="/applications" element={<Application />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
