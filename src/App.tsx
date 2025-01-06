import { Route,Routes } from 'react-router';
import './App.css';
import { BestSellers } from './BestSellers';
import { Header } from './Header';
import { Product } from './Product';

function App() {
  return (
  <div className='appContainer'>
  <Header/>
  <Routes>
        <Route path="/" element={<BestSellers />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
  </div>
  
  )
}

export default App
