import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home';
import Catalog from './pages/catalog/Catalog';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
