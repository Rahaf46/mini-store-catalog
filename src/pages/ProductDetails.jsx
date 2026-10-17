
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199,
    description: 'Comfortable wireless headphones with clear sound.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299,
    description: 'A smart watch to track your daily activity.',
  },
  {
    id: 3,
    name: 'Portable Speaker',
    price: 149,
    description: 'A compact speaker with powerful sound.',
  },
]

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <main className="page">
        <h1>Product not found</h1>
        <Link to="/">Back to Store</Link>
      </main>
    )
  }

  return (
    <main className="page">
      <Link to="/">← Back to Store</Link>

      <article className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>{product.price} SAR</h2>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </article>
    </main>
  )
}

export default ProductDetails
