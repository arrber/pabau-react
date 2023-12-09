import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Selection from './Pages/MainSelection/Selection';
import Details from './Pages/Details/Details';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Selection/>}/>
          <Route path="/detail" element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
