import React, { useState } from 'react';
import './App.css';

interface CarouselItem {
  id: number;
  title: string;
  position: string;
  description: string;
  imageUrl: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'Anna Johnson',
    position: 'WEB DESIGNER',
    description: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Dep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    imageUrl: '/media/img1.jpg',
  },
  {
    id: 2,
    title: 'Xing Jones',
    position: 'SENIOR STUDENT',
    description: 'Sriracha literally flexitarian irony, Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb',
    imageUrl: '/media/img2.jpg',
  },
  {
    id: 3,
    title: 'Sandwick Bryant',
    position: 'GRAPHIC DESIGNER',
    description: 'axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic',
    imageUrl: '/media/img3.png',
  },
  {
    id: 4,
    title: 'Random Dude',
    position: 'TAMBAY',
    description: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan.',
    imageUrl: '/media/img4.jpg',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  
  const randomSlide = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="carousel-box">
              <img src={item.imageUrl} alt={item.title} className="circular-photo" /> {}
              <h3 className="text">{item.title}</h3>
              <h1 className="postxt">{item.position}</h1>
              <p className="desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="random" onClick={randomSlide}>
        SURPRISE ME
      </button>
      <button className="prev" onClick={prevSlide}>
      &lt; 
      </button>
      <button className="next" onClick={nextSlide}>
      &gt;
      </button>
    </div>
  );
};

export default Carousel;
