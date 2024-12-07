import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p2 from "../assets/img/3 2.png"; // Example image
import "./Projects.css";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      {">"}
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    >
      {"<"}
    </button>
  );
};

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide index

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: true,
    beforeChange: (current, next) => setActiveSlide(next), // Update active slide index
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const slidesData = [
    {
      id: 0,
      title: "Node.js Project",
      name: "Old School Bot",
      description:
        "Contact us today and learn how we can help bring your business to the next level with a custom software solution!",
      image: p2,
    },
    {
      id: 1,
      title: "React Project",
      name: "Modern App",
      description:
        "Let us help you design and build responsive, dynamic apps that capture your audience.",
      image: p2,
    },
    {
      id: 2,
      title: "UI/UX Design",
      name: "Sleek Interface",
      description:
        "Beautiful and functional UI/UX designs tailored to meet your business goals.",
      image: p2,
    },
  ];

  return (
    <div className="projects-container">
      <div className="text-content">
        {/* Display the details of the active slide */}
        <h3>{slidesData[activeSlide].title}</h3>
        <h1>{slidesData[activeSlide].name}</h1>
        <p>{slidesData[activeSlide].description}</p>
      </div>
      <Slider {...sliderSettings}>
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${
              index === activeSlide ? "active" : "inactive"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className={`project-image ${
                index === activeSlide ? "highlight" : ""
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
