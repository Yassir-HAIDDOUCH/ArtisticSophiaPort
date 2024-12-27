import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/header.jsx';
import Footer from './components/layouts/footer.jsx';
import Home from './components/pages/home.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
