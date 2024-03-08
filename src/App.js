import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Quiz from './quiz';
import Guide from './guide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/guide' element={<Guide />}/>      
      </Routes>
    </Router>
  );
}

export default App;
