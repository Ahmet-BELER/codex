import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from "./pages/home"
import Detail from "./pages/detail"
import Sepet from "./pages/sepet"
import Layout from "./components/layout"


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' exact element={<Layout><Home/></Layout> } />
        <Route path='/sepet' exact element={<Layout><Sepet/></Layout>} />
        <Route path='/item/:id' exact element={<Layout><Detail/></Layout>} />
      </Routes>
    </Router>
    </div>
  );
}


export default App;
