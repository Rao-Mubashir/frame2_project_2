import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Faqs from './pages/Faqs';
import Booking from './pages/Booking';
import ServiceDetails from './pages/ServiceDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/service/:serviceId" element={<ServiceDetails />} />
      </Routes>
    </Router>
  );
}