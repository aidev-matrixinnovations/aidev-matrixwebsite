import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Pricing from './components/Pricing';
import Categories from './components/Categories';
import Homepage from './components/HomePage';
import Maximizepricing from './components/Maximizepricing';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import StrategyViewer from './components/StrategyViewer';
import NoHeaderFooterLayout from './components/NoHeaderFooterLayout';
/* chnages made by BINIT KUMAR :TSTING PUSH MAIN */
const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<HeaderFooterLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/maximizepricing" element={<Maximizepricing />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route element={<NoHeaderFooterLayout />}>
            <Route path="/strategy/:strategy" element={<StrategyViewer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;