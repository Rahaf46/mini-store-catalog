
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import './App.css'

function StoreLayout() {
  const { cart } = useCart()

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">Mini Store</Link>
        <Link
  to="/cart"
  className="cart-link"
  aria-label={`Shopping Cart, ${cart.length} items`}
>
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.5L21 8H6" />
    <circle cx="10" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>

  {cart.length > 0 && (
    <span className="cart-count">{cart.length}</span>
  )}
</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1 className="page">Page Not Found</h1>} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <StoreLayout />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
