import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import CV from './pages/CV';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/cv" />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}