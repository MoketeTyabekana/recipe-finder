
import './App.css';
import React from 'react';
import { BrowserRouter  as Router, Route, Routes, Link} from 'react-router-dom'; 
import	Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <Router>
      <nav >
        <Link to='/'Home>Home</Link>|<Link to='/about' element ={<About/>}>About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
