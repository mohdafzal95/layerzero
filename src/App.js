import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BlogPost from './Components/BlogPost'; // Assuming you have a separate component for the full blog post
import Home from './Pages/Home';
import FallingMeteors from './Components/starts'
function App() {
  return (
    <div className="App">
     
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
