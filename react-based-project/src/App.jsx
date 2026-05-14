import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AdminPortal from './pages/AdminPortal';
import { CoffeeProvider } from './context/CoffeeContext';
import './App.css';

export default function App() {
  return (
    <CoffeeProvider>
      <Router>
        <div className="app">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/admin" element={<AdminPortal />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CoffeeProvider>
  );
}
