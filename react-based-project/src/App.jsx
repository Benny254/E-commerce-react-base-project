<<<<<<< HEAD
import { useState } from 'react'
import './App.css'

function App() {
 return(
  <>
  </>
  )
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </Router>
  );
>>>>>>> d9ed9e2bcc3b5e22188711798242ac134a08ddac
}

export default App;