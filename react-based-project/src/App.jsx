import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoffeeProvider } from './context/CoffeeContext';  // ← add this
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';
import './App.css';

function App() {
  return (
    <CoffeeProvider>  {/* ← wrap everything in this */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </Router>
    </CoffeeProvider>
  );
}

export default App;