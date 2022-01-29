import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Villas from './pages/Villas';
import Thassos from './pages/Thassos';
import Contact from './pages/Contact'
import Book from './pages/Book'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Thassos" element={<Thassos />}/>
        <Route path="/Villas" element={<Villas />}/>
        <Route path="/Apartments" element={<Apartments />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Book" element={<Book />}/>
      </Routes>
  </Router>
  );
}

export default App;
