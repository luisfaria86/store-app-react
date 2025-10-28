import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const Home = lazy(() => import('./pages/home'));
const Fruits = lazy(() => import('./pages/fruits'));
const Vegetables = lazy(() => import('./pages/vegetables'));
const ProductDetails = lazy(() => import('./pages/productDetails'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}

// Separate component to use the theme context
function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`h-screen transition-colors duration-200 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className='sticky w-full top-0 z-50'>
        <NavBar />
      </div>
      <div className={`pt-20 w-full overflow-y-auto ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
        <div className="max-w-screen-xl mx-auto">
          <Suspense fallback={
            <div className="flex justify-center items-center h-32">
              <div className={`animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 ${isDarkMode ? 'border-white' : 'border-black'}`}></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fruits" element={<Fruits />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default App
