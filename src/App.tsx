import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import PromoModal from './components/PromoModal';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard';

function MainLayout() {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFloat />
      <PromoModal />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-site font-cairo text-text-main rtl flex flex-col">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
