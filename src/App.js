import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/HomePage';
import Maximizepricing from './components/Maximizepricing';
import NoHeaderFooterLayout from './components/NoHeaderFooterLayout';
import Pricing from './components/Pricing';
import Project from './components/Project';
import Services from './components/Services';
import StrategyViewer from './components/StrategyViewer';

const App = () => {
  return (
    <div className="app">
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