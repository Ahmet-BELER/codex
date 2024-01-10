import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from "./redux/slices/booksSlices";
import Home from "./pages/home"
import Detail from "./pages/detail"
import Sepet from "./pages/sepet"
import Layout from "./components/layout"
import Pay from "./pages/pay"


function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch or initialize books when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);


  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' exact element={<Layout><Home/></Layout> } />
        <Route path='/sepet' exact element={<Layout><Sepet/></Layout>} />
        <Route path='/book/:id' exact element={<Layout><Detail/></Layout>} />
        <Route path='/pay' exact element={<Layout><Pay/></Layout>} />
     
      </Routes>
    </Router>
    </div>
  );
}


export default App;
