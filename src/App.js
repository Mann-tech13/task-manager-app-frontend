import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TaskBoard from "./pages/TaskBoard"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskBoard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
