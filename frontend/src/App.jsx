import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Narvar from './components/Narvar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PizzaPage from './pages/PizzaPage';

function App() {
  return (
    <div>
      <Narvar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/pizza/:id" element={<PizzaPage />} /> {/* No se necesita pasar props aquí */}
        <Route path="*" element={<NotFoundPage />} /> {/* La ruta de 404 debe estar al final */}
        <Route path="/404" element={<NotFoundPage />} /> {/* La ruta de 404 debe estar al final */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;