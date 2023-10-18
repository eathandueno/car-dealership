import React from 'react';
import './Inventory.css';
import porsche from './porsche.webp';
import oldTimer from './oldTimer2.png';
const Inventory = () => {
    // This is just a static list of cars. In a real application, this data might be fetched from an API.
    const cars = [
        { id: 1, name: 'Car Model A', price: '$25,000', image: porsche },
        { id: 2, name: 'Car Model B', price: '$35,000', image: oldTimer },
        // ... more cars
    ];

    return (
        <div className="inventory-container">
            <h2>Our Inventory</h2>
            <ul className="car-list">
                {cars.map(car => (
                    <li key={car.id} className="car-item">
                        <img src={car.image} alt={car.name} />
                        <h3>{car.name}</h3>
                        <p>{car.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Inventory;
