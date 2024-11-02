
import HomeV1 from './components/homeV1';
import About from './pages/others/about';
import Cart from './pages/others/cart';
import List from './pages/others/list';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeV1 />} />
      <Route path="/shop" element={<List />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
   </Router>
  );
}

export default App;
