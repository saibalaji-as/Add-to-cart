import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ onAddToCart, cart, filter }) => {
  const [products, setProducts] = useState([]);

  let [clonedProductList, setClone] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setClone(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (filter) {
      setProducts(clonedProductList.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())));
    } else {
      setProducts(clonedProductList);
    }
  }, [filter]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isInCart={cart.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
