import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hello from "./pages/Hello"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/header" element={}/> */}
        {/* <Route exact path="/sidebar" element={}/> */}
        <Route exact path="/manage" element={<Hello/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
