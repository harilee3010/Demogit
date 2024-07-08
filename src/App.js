import React from 'react';
import Profile  from './Card/Profile_Card/index.tsx';
import Product from './Card/Product_Card/index.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} /> 
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
