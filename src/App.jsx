import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/header.jsx';
import Footer from './layouts/footer.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';
import Project from './pages/project.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Project/:id' element={<Project/>}/>
        <Route path='/AboutMe' element={<About/>}/>
        <Route path='/ContactMe' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
