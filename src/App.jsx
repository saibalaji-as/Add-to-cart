import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [filterData, setFilter] = useState('');
  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="app">
      <Navbar cartCount={cart.length} onCartClick={toggleModal} onSearchValueChange={handleFilter}/>
      <ProductList onAddToCart={handleAddToCart} cart={cart} filter={filterData}/>
      {isModalOpen && (
        <CartModal
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default App;
