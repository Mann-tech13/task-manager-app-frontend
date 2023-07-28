import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TaskBoard from "./pages/TaskBoard";
import MyCalendar from "./pages/MyCalendar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const accessToken = useSelector((state) => state.accessToken.token);

  return (
    <Router>
      <Routes>
        {accessToken === null ? (
          <>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<TaskBoard />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<TaskBoard />} />
            <Route exact path="/calendar" element={<MyCalendar />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
