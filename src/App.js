import React from 'react';

import {
  Routes,
  Route,
} from 'react-router-dom'; import Home from './pages/Home';
import Quote from './pages/Quote';
import Calculator from './components/calculator';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
