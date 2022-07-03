import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import News from './pages/News';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/'  element={<Home/>}></Route>
        <Route exact path='/news' element={<News/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

