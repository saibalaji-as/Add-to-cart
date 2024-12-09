import './CartModal.css';

const CartModal = ({ cart, onRemoveFromCart, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => onRemoveFromCart(item.id)}>
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;
