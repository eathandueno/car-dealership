import React from 'react';
import './MediaGallery.css';
import car from './car1.png';
import oldTimer from './oldTimer.png';
const MediaGallery = () => {
    const mediaItems = [
        { id: 1, type: 'image', src: car },
        { id: 2, type: 'image', src: oldTimer },
        // ... more media items (can include videos or other types)
    ];

    return (
        <div className="gallery-container">
            <h2>Media Gallery</h2>
            <ul className="media-list">
                {mediaItems.map(item => (
                    <li key={item.id} className="media-item">
                        {item.type === 'image' && <img src={item.src} alt="Car media" />}
                        {/* Can add more conditions for other media types like videos */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MediaGallery;
