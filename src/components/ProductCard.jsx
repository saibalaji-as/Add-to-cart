import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const handleAddToCart = () => {
    if (isInCart) {
      alert('Item already added to the cart');
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={handleAddToCart}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
