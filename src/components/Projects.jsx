import React, { useState } from 'react';
import './Projects.css';
import P1 from '../assets/img/3 2.png';
const Projects = () => {
  const [showDetail, setShowDetail] = useState(false);

  const showSlider = (type) => {
    const carousel = document.querySelector('.carousel');
    const listHTML = document.querySelector('.carousel .list');
    const items = document.querySelectorAll('.carousel .list .item');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    if (type === 'next') {
      listHTML.appendChild(items[0]);
      carousel.classList.add('next');
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add('prev');
    }

    setTimeout(() => {
      nextButton.style.pointerEvents = 'auto';
      prevButton.style.pointerEvents = 'auto';
    }, 2000);
  };

  const projects = [
    {
      id: 1,
      imgSrc: P1,
      title: 'DESIGN SLIDER',
      topic: 'Aerphone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: [
        { label: 'Used Time', value: '6 hours' },
        { label: 'Charging port', value: 'Type-C' },
        { label: 'Compatible', value: 'Android' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'Controlled', value: 'Touch' },
      ],
    },
    {
      id: 1,
      imgSrc: P1,
      title: 'DESIGN SLIDER',
      topic: 'Aerphone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: [
        { label: 'Used Time', value: '6 hours' },
        { label: 'Charging port', value: 'Type-C' },
        { label: 'Compatible', value: 'Android' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'Controlled', value: 'Touch' },
      ],
    },
    {
      id: 1,
      imgSrc: P1,
      title: 'DESIGN SLIDER',
      topic: 'Aerphone',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.',
      detailTitle: 'Aerphone GHTK',
      detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.',
      specifications: [
        { label: 'Used Time', value: '6 hours' },
        { label: 'Charging port', value: 'Type-C' },
        { label: 'Compatible', value: 'Android' },
        { label: 'Bluetooth', value: '5.3' },
        { label: 'Controlled', value: 'Touch' },
      ],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className={`carousel ${showDetail ? 'showDetail' : ''}`}>
        <div className="list">
          {projects.map((project) => (
            <div className="item" key={project.id}>
              <img src={project.imgSrc} alt={`img${project.id}`} />
              <div className="introduce">
                <div className="title">{project.title}</div>
                <div className="topic">{project.topic}</div>
                <div className="des">{project.description}</div>
                <button className="seeMore" onClick={() => setShowDetail(true)}>SEE MORE &#8599;</button>
              </div>
              <div className="detail">
                <div className="title">{project.detailTitle}</div>
                <div className="des">{project.detailDescription}</div>
                <div className="specifications">
                  {project.specifications.map((spec, index) => (
                    <div key={index}>
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
          <button id="prev" onClick={() => showSlider('prev')}>&lt;</button>
          <button id="next" onClick={() => showSlider('next')}>&gt;</button>
          <button id="back" onClick={() => setShowDetail(false)}>See All &#8599;</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
