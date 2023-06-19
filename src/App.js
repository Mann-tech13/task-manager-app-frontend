import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/header" element={<Header/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
