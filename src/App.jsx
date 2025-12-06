import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import TodoList from './TodoList';
import BudgetTracker from './BudgetTracker';
import IndoLink from './IndoLink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        
        <Route path="/todo" element={<TodoList />} />
        <Route path="/budget" element={<BudgetTracker />} />
        <Route path="/indolink" element={<IndoLink />} />
      </Routes>
    </Router>
  );
}

export default App;