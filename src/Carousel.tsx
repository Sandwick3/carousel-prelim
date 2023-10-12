import React, { useState } from 'react';
import './App.css'; // Import the CSS file

interface CarouselItem {
  id: number;
  title: string;
  description: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for Item 1',
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for Item 2',
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Description for Item 3',
  },
  // Add more items with titles and descriptions
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      {items.map((item, index) => (
        <div key={item.id} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
          <div className="carousel-box">
            <div className="circle-button prev" onClick={prevSlide}>
              <div className="arrow-left"></div>
            </div>
            <h3 className="text">{item.title}</h3>
            <p className="desc">{item.description}</p>
            <div className="circle-button next" onClick={nextSlide}>
              <div className="arrow-right"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
