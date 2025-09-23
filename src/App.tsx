import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import Fruits from './pages/fruits';
import Vegetables from './pages/vegetables';
import Home from './pages/home';
import ProductDetails from './pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='mx-auto'>
        <div className='fixed w-full top-0 left-0 z-50 mb-4'>
          <NavBar title={'My Store'} />
        </div>
          <div className='pt-32'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
