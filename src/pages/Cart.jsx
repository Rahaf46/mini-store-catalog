
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <main className="page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((product, index) => (
              <article className="cart-item" key={`${product.id}-${index}`}>
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.price} SAR</p>
                </div>

                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </article>
            ))}
          </div>

          <h2>Total: {total} SAR</h2>
        </>
      )}

      <Link to="/">Continue Shopping</Link>
    </main>
  )
}

export default Cart
