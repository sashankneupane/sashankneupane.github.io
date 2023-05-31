import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import { createBrowserHistory } from 'history';

import Index from './pages/Index';
import CV from './pages/CV';
import MNIST from './pages/Mnist';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';


const history = createBrowserHistory();
history.listen((location) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'pageview',
      pagePath: location.pathname,
      pageTitle: document.title,
    },
  });
});

export default function App() {

  return (
    <Router history = {history}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/mnist" element={<MNIST />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}