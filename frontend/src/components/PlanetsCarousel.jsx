import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const planets = [
  { name: "Mercury", image: "../images/planet1.jpg" },
  { name: "Venus", image: "../images/planet1.jpg" },
  { name: "Earth", image: "../images/planet1.jpg" },
  { name: "Mars", image: "../images/planet1.jpg"},
  { name: "Jupiter", image: "../images/planet1.jpg" },
  { name: "Saturn", image: "../images/planet1.jpg"},
  { name: "Uranus", image: "../images/planet1.jpg"},
  { name: "Neptune", image: "../images/planet1.jpg" },
  { name: "Pluto", image: "../images/planet1.jpg"},
];

export const PlanetsCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {planets.map((planet, index) => (
          <Slide key={index}>
            <PlanetImage src={planet.image} alt={planet.name} />
            <PlanetName>{planet.name}</PlanetName>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Slide = styled.div`
  text-align: center;
  padding: 10px;
`;

const PlanetImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
`;

const PlanetName = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;
