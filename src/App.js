import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskBoard from "./pages/TaskBoard"
import MyCalendar from './pages/MyCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskBoard/>}/>
        <Route exact path="/calendar" element={<MyCalendar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
