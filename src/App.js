import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskBoard from "./pages/TaskBoard"
import MyCalendar from './pages/MyCalendar';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskBoard/>}/>
        <Route exact path="/calendar" element={<MyCalendar/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
