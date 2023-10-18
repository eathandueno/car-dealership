import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <motion.div 
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
        <div className="home-container">
            <h1>Welcome to Our Car Dealership!</h1>
            <p>
                Discover our exclusive collection of cars. Whether you're looking for luxury, 
                economy, or something in between, we've got the perfect vehicle for you.
            </p>
            <img src="/path-to-hero-image.jpg" alt="Cars showcased" />
        </div>
        </motion.div>
    );
}

export default Home;
