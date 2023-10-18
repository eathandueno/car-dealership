import React from 'react';
import { Link } from 'react-router-dom';
import './Navigate.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Car Dealership</Link>
            <ul className="navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
