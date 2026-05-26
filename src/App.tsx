import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/Layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import ServiceDetail from './pages/ServiceDetail';
import SupportedBrands from './pages/SupportedBrands';
import Contact from './pages/Contact';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ProductsServices />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/brands" element={<SupportedBrands />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
