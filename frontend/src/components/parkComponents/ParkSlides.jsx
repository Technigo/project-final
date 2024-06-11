/* eslint-disable no-console */
import { useParkStore } from "../../store/useParkStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ParkImage } from "./ParkImage";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Line } from "../iconFolder/Line";

export const ParkSlides = ({ nation }) => {
  const { fetchParkData, parkData, loading, error } = useParkStore();

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks?nation=${nation}`);
    console.log(parkData);
  }, [fetchParkData, nation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1220},
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet1: {
      breakpoint: { max: 1200, min: 1000 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet3: {
      breakpoint: { max: 1000, min: 744 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 744, min: 320 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className="flex flex-col md:pt-2 md:pb-[150px] lg:px-2 lg:pt-2 lg:pb-[150px]">
      <div>
        <Line />
      </div>
      <h2 className="pb-[20px] text-h2sm text-left text-fontColor pt-3">
        Pick your next destination
      </h2>
      <div className="flex flex-col sm:p-3 md:px-[30px] md:pb-[50px] lg:px-[30px] lg:pb-[80px]">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          partialVisible={true}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-3"
          showDots={true}
        >
          {parkData.map((park) => (
            <div
              key={park._id}
              className="flex flex-col justify-center items-center sm:pb-[50px] md:max-w-[341px] gap-y-[20px] md:pb-[50px] md:pt-2"
            >
              <Link
                to={`/${park.nation}/${park.name
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <ParkImage
                  name={park.name}
                  alt={`${park.name}`}
                  className={
                    "sm:w-[325px] sm:h-[418px] md:w-[250px] md:h-[261px]  object-cover rounded"
                  }
                />
              </Link>
              <Link
                to={`/${nation}/${park.name.toLowerCase().replace(/ /g, "-")}`}
              >
                <h3 className="text-textlg md:text-xl text-fontColor">
                  {park.name}
                </h3>
              </Link>
              <p className="sm:text-textsm md:text-textmd lg:text-textmd text-fontColor break-words text-center">
                {park.introduction.slice(0, 80)}...
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
