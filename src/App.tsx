import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { LimitedCompanies } from './pages/LimitedCompanies';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/limited-companies" element={<LimitedCompanies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;