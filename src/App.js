import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskBoard from "./pages/TaskBoard"
import Calendar from './pages/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskBoard/>}/>
        <Route exact path="/calendar" element={<Calendar/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
