import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">VINTAGE CO.</Link>

        <nav className="nav-links">
          <Link to="/shop">Shop</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button className="menu-btn"><Menu size={24} /></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
