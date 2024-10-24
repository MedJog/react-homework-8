
import './styles/style.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layuot';
import HomePage from './components/pages/HomePage';
import Registration from './components/pages/Registration'; 
import Cart from './components/pages/Cart';
import Catalog from './components/pages/Catalog';
import Product from './components/pages/Product';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
