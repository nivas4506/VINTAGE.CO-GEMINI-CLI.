import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-content">
          <h1>Authentic Vintage Threads</h1>
          <p>Curated collection of unique pieces from the 70s, 80s, and 90s. One-of-a-kind style for the modern world.</p>
          <div className="hero-btns">
            <Link to="/shop" className="btn btn-primary">Shop All</Link>
            <Link to="/categories" className="btn btn-secondary">Collections</Link>
          </div>
        </div>
      </section>

      <section className="featured-section container">
        <div className="section-header">
          <h2>Featured Arrivals</h2>
          <Link to="/shop" className="view-all">View All Products →</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="container info-grid">
          <div className="info-item">
            <h3>Sustainable Fashion</h3>
            <p>Choosing vintage is choosing the planet. Reduce waste and look great doing it.</p>
          </div>
          <div className="info-item">
            <h3>Carefully Curated</h3>
            <p>Every piece is hand-picked for quality, style, and authenticity.</p>
          </div>
          <div className="info-item">
            <h3>Fast Shipping</h3>
            <p>We ship worldwide with eco-friendly packaging to get your finds to you fast.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
