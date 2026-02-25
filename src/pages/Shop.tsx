import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

const Shop: React.FC = () => {
  return (
    <div className="shop-page container">
      <div className="shop-header">
        <h1>All Vintage Items</h1>
        <p>Browse our full collection of authentic vintage clothing.</p>
      </div>

      <div className="shop-layout">
        <aside className="filters">
          <h3>Categories</h3>
          <ul>
            <li>Outerwear</li>
            <li>Tops</li>
            <li>Pants</li>
            <li>Accessories</li>
          </ul>

          <h3>Price Range</h3>
          <div className="price-filters">
            <label><input type="checkbox" /> Under $50</label>
            <label><input type="checkbox" /> $50 - $100</label>
            <label><input type="checkbox" /> Over $100</label>
          </div>
        </aside>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
