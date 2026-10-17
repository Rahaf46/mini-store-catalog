
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 199, description: 'Comfortable wireless headphones with clear sound.' },
  { id: 2, name: 'Smart Watch', price: 299, description: 'A smart watch to track your daily activity.' },
  { id: 3, name: 'Portable Speaker', price: 149, description: 'A compact speaker with powerful sound.' },
]

function Home() {
  const { addToCart } = useCart()

  return (
    <main className="page">
      <h1>Mini Store</h1>
      <p>Discover our products</p>

      <div className="products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>{product.price} SAR</strong>

            <div className="product-actions">
              <Link to={`/product/${product.id}`}>View Details</Link>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Home
