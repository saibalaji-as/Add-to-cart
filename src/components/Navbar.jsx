import './Navbar.css';

const Navbar = ({ cartCount, onCartClick, onSearchValueChange }) => {

  return (
    <nav className="navbar">
      <h1>E-Kart</h1>

      <input onChange={onSearchValueChange}  placeholder='Search product...' className='search-product' type='search' />

      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
