import { useState } from 'react'
import './App.css'
import './ProductInf.css'
import './styles/home.css'
import './styles/Login.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, LogIn, ProductDetails, Purchases, ProtectedRoutes } from './pages/index'
import Footer from './Components/Footer';



function App() {
  const [count, setCount] = useState(0)


  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/purchases' element={<Purchases />} />
      </Route>
      <Route path='/LogIn' element={<LogIn />} />      
    </Routes>
  </HashRouter>
  )
}

export default App
