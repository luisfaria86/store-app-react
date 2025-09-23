import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar'

const Home = lazy(() => import('./pages/home'));
const Fruits = lazy(() => import('./pages/fruits'));
const Vegetables = lazy(() => import('./pages/vegetables'));
const ProductDetails = lazy(() => import('./pages/productDetails'));

function App() {
  return (
    <BrowserRouter>
      <div className='mx-auto'>
        <div className='sticky w-full top-0 z-50'>
          <NavBar title={'My Grocery Shop'} />
        </div>
        <div className='overflow-y-auto pt-20 w-full'>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fruits" element={<Fruits />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
            </Suspense>
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
