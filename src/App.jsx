import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { Layout } from './Layout';
import { Homepage } from './index';
import { ResumePage } from './ResumePage';

function App() {
  return (
    <ThemeProvider>
      <Router basename={__BASENAME__}>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
