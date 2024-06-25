import { useParkStore } from "../../store/useParkStore";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ParkImage } from "./ParkImage";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Line } from "../iconFolder/Line";
import Lottie from "lottie-react";
import Loading from "../../assets/loading.json";
import { useFavPark } from "../../contexts/FavParkContext";
import { Heart } from "../iconFolder/Heart";

export const ParkSlides = ({ nation }) => {
  const { fetchParkData, parkData, loading, error } = useParkStore();
  const { favourites, addToFavourites, removeFromFavourites } = useFavPark();
  const navigate = useNavigate();

  const isFav = (parkId) => favourites.some((fav) => fav._id === parkId);

  const handleToggleFavPark = (park, e) => {
    e.preventDefault();
    if (isFav(park._id)) {
      removeFromFavourites(park._id);
    } else {
      addToFavourites(park._id);
    }
  };

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks?nation=${nation}`);
  }, [fetchParkData, nation]);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        role="status"
        aria-label="Loading"
      >
        {loading && (
          <Lottie
            animationData={Loading}
            loop={true}
            className="w-[300px] h-[300px]"
          />
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex flex-col justify-center items-center h-screen"
        role="alert"
      >
        <p>Error: {error}</p>
        <Link to="/" className="text-blue-500 underline">
          Back to home page
        </Link>
      </div>
    );
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1220 },
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
        <div className="px-[25px]">
          <Line />
          <h2 className="pb-[20px] lg:text-h2lg md:text-h2md sm:text-h2sm text-left text-fontColor pt-3">
            Pick your next destination
          </h2>
        </div>
      </div>
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
          aria-label="Park carousel"
        >
          {parkData.map((park, index) => (
            <div
              key={park._id}
              className="flex flex-col justify-center items-center sm:pb-[50px] md:max-w-[341px] gap-y-[20px] md:pb-[50px] md:pt-2"
              role="group"
              aria-labelledby={`park-${park._id}-name`}
              aria-describedby={`park-${park._id}-description`}
              aria-hidden={index >= responsive.mobile.items ? "true" : "false"} // Adjust based on visibility
              tabIndex={index >= responsive.mobile.items ? -1 : 0}
            >
              <div className="relative">
                <ParkImage
                  name={park.name}
                  alt={`Image of ${park.name}`}
                  onClick={() =>
                    navigate(
                      `/${park.nation}/${park.name
                        .toLowerCase()
                        .replace(/ /g, "-")}`
                    )
                  }
                  className="relative sm:w-[325px] sm:h-[418px] md:w-[250px] md:h-[261px] object-cover rounded transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={(e) => handleToggleFavPark(park, e)}
                  className="absolute flex justify-center items-center bg-bg1 w-[44px] h-[44px] rounded-tl rounded-br right-[0px] bottom-[0px]" // Increased size for better touch target
                  aria-label={
                    isFav(park._id)
                      ? `Remove ${park.name} from favourites`
                      : `Add ${park.name} to favourites`
                  }
                  tabIndex={index >= responsive.mobile.items ? -1 : 0}
                >
                  {isFav(park._id) ? <Heart fill={"#3B744E"} /> : <Heart />}
                </button>
              </div>
              <Link
                to={`/${nation}/${park.name.toLowerCase().replace(/ /g, "-")}`}
                id={`park-${park._id}-name`}
                aria-label={`View details of ${park.name}`}
                tabIndex={index >= responsive.mobile.items ? -1 : 0}
                className="block w-full" // Ensuring the link spans the full width for better touch target
              >
                <h3 className="text-textlg md:text-xl text-center text-fontColor">
                  {park.name}
                </h3>
              </Link>
              <p
                id={`park-${park._id}-description`}
                className="sm:text-textsm md:text-textmd lg:text-textmd text-fontColor break-words text-center"
                tabIndex={index >= responsive.mobile.items ? -1 : 0}
              >
                {park.introduction.slice(0, 80)}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
