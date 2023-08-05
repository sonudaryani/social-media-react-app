import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compnents/Home';
import ItemDetail from './compnents/Detail';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/item/:id" element={< ItemDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
