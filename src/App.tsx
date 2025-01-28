import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/ProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import FaqPage from './pages/FaqPage/FaqPage';
import NotFoundPage from './pages/NotFound/NotFound';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
