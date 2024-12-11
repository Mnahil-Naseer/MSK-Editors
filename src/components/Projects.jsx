import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import img from '../assets/img/3 2.png';

const Projects = () => {
  const [items, setItems] = useState([
    {
      img: { img },
      title: 'MODERN DESIGN',
      topic: 'Aerphone X1',
      desc: 'Experience unparalleled sound with cutting-edge technology.',
      detail: 'Crafted for audiophiles, Aerphone X1 offers unmatched comfort, durability, and superior sound quality for every lifestyle.',
      specifications: [
        { label: 'Used Time', value: '12 hours' },
        { label: 'Charging Port', value: 'Type-C' },
        { label: 'Compatible', value: 'iOS & Android' },
        { label: 'Bluetooth', value: '5.4' },
        { label: 'Controlled', value: 'Touch & Voice' },
      ],
    },
    {
      img: { img },
      title: 'PREMIUM QUALITY',
      topic: 'Aerphone Lite',
      desc: 'A lightweight, durable option for everyday use.',
      detail: 'With exceptional battery life and high-definition sound, Aerphone Lite is perfect for those on the go.',
      specifications: [
        { label: 'Used Time', value: '10 hours' },
        { label: 'Charging Port', value: 'Micro-USB' },
        { label: 'Compatible', value: 'Android' },
        { label: 'Bluetooth', value: '5.0' },
        { label: 'Controlled', value: 'Button' },
      ],
    },
    {
      img: { img },
      title: 'ELEGANT DESIGN',
      topic: 'Aerphone Max',
      desc: 'Designed for style and performance.',
      detail: 'Aerphone Max delivers exceptional sound with a sleek, stylish design, perfect for professional environments.',
      specifications: [
        { label: 'Used Time', value: '8 hours' },
        { label: 'Charging Port', value: 'Type-C' },
        { label: 'Compatible', value: 'Windows & Android' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'Controlled', value: 'Touch' },
      ],
    },
    {
      img: { img },
      title: 'SPORTS EDITION',
      topic: 'Aerphone Active',
      desc: 'Built for your active lifestyle.',
      detail: 'Sweat-resistant and lightweight, Aerphone Active is ideal for workouts and outdoor activities.',
      specifications: [
        { label: 'Used Time', value: '9 hours' },
        { label: 'Charging Port', value: 'Type-C' },
        { label: 'Compatible', value: 'All Devices' },
        { label: 'Bluetooth', value: '5.1' },
        { label: 'Controlled', value: 'Button' },
      ],
    },
    {
      img: { img },
      title: 'BASS BOOSTER',
      topic: 'Aerphone Bass',
      desc: 'Feel the beat with deep bass technology.',
      detail: 'Designed for music lovers who want powerful bass without compromising on sound quality.',
      specifications: [
        { label: 'Used Time', value: '10 hours' },
        { label: 'Charging Port', value: 'Type-C' },
        { label: 'Compatible', value: 'iOS & Android' },
        { label: 'Bluetooth', value: '5.2' },
        { label: 'Controlled', value: 'Button & Touch' },
      ],
    },
  ]);
  
  const [showDetail, setShowDetail] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickable, setClickable] = useState(true);
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (!clickable) return;
    setClickable(false);
    setActiveIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setClickable(true), 1000);
  };

  const handlePrev = () => {
    if (!clickable) return;
    setClickable(false);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setClickable(true), 1000);
  };

  const handleSeeMore = () => {
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  return (
    <div className={`carousel ${showDetail ? 'showDetail' : ''}`} ref={carouselRef}>
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${index === activeIndex ? 'active' : ''}`}
            key={index}
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            <img src={item.img} alt={item.topic} />
            <div className="introduce">
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.desc}</div>
              <button className="seeMore" onClick={handleSeeMore}>
                SEE MORE &#8599;
              </button>
            </div>
            <div className="detail">
              <div className="title">{item.title}</div>
              <div className="des">{item.detail}</div>
              <div className="specifications">
                {item.specifications.map((spec, idx) => (
                  <div key={idx}>
                    <p>{spec.label}</p>
                    <p>{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="checkout">
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>&lt;</button>
        <button id="next" onClick={handleNext}>&gt;</button>
        <button id="back" onClick={handleBack}>See All &#8599;</button>
      </div>
    </div>
  );
};

export default Projects;
