import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./Components/ProfileList";
import ProfileDetails from "./Components/ProfileDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Profile Mapping App</h1>
        <Routes>
          <Route exact path="/" element={<ProfileList />} />
          <Route path="/profiles/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
