import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Map } from "../components/Map";
import { ParkImage } from "../components/parkComponents/ParkImage";
import { BackBtn } from "../components/buttons/BackBtn";
import { Line } from "../components/iconFolder/Line";
import { TextRating } from "../components/parkComponents/ParkRate";
import Lottie from "lottie-react";
import Loading from "../assets/loading.json";

export const ParkInfoPage = () => {
  const { fetchParkData, parkData, loading, error } = useParkStore();
  const { parkName } = useParams();

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks`);
  }, [fetchParkData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
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

  const parkInfo = parkData.find(
    (park) => park.name.toLowerCase().replace(/ /g, "-") === parkName
  );

  if (!parkInfo) {
    return (
      <div
        className="flex flex-col justify-center items-center h-screen"
        role="alert"
      >
        <p>Park not found</p>
        <Link to="/" className="text-blue-500 underline">
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="sm:p-2 md:p-[80px] lg:p-[100px]">
        <div>
          <BackBtn />
        </div>

        <div
          key={parkInfo._id}
          className="grid max-w-full place-content-center sm:grid-rows-12 sm:grid-cols-6 sm:p-2 sm:gap-y-3 md:grid-cols-11 md:grid-rows-7 md:gap-y-3 md:p-3 lg:grid-rows-13 lg:grid-col-11 pt-3"
        >
          <div
            className="sm:row-start-5 sm:col-start-1 sm:col-span-3 sm:content-start md:content-center md:row-start-3 md:col-start-1 md:col-span-6 lg:row-start-1 lg:col-start-1 lg:col-span-5 lg:content-center"
            role="heading"
            aria-level="2"
          >
            <Line />
            <h2 className="sm:text-h2sm md:text-h2lg lg:text-h2lg">
              {parkInfo.name}
            </h2>
          </div>
          <div className="sm:row-start-6 sm:col-start-1 sm:col-span-2 content-start md:row-start-4 md:col-start-1 lg:row-start-2 lg:col-start-1 lg:col-span-2">
            <p className="sm:text-textsm md:text-textmd lg:text-textlg">
              {parkInfo.rating}
            </p>
            <TextRating labels={parkInfo.rating} value={parkInfo.rating} />
          </div>

          <div
            className="sm:row-start-6 sm:col-start-3 sm:col-span-4 sm:pt-3 sm:pl-3 md:row-start-4 md:col-start-6 md:col-span-6 md:content-start lg:row-start-3 lg:row-span-3 lg:col-start-1 lg:col-span-5"
            role="contentinfo"
          >
            <p className="sm:text-textsm md:text-textmd lg:text-textlg">
              <span className="font-bold flex flex-col">Opening hours: </span>
              {parkInfo.opening_hours}
            </p>
            <p className="sm:text-textsm md:text-textmd lg:text-textlg">
              <span className="font-bold flex flex-col">Address: </span>
              {parkInfo.address}
            </p>
            <p className="sm:text-textsm md:text-textmd lg:text-textlg">
              <span className="font-bold flex flex-col break-words">
                Parking:{" "}
              </span>
              {parkInfo.parking_info}
            </p>
          </div>

          <Map
            position={[parkInfo.location.latitude, parkInfo.location.longitude]}
            parkName={parkInfo.name}
            className="sm:w-[390px] sm:h-[224px] md:w-[534px] md:h-[324px] lg:w-[423px] l:h-[278px] sm:row-start-10 sm:col-start-1 sm:col-span-6 md:row-start-6 md:col-start-1 md:col-span-10 md:justify-self-start lg:row-start-6 lg:content-start lg:col-start-1 lg:col-span-4 justify-self-center"
            aria-label={`Map showing location of ${parkInfo.name}`}
          />
          <p
            className="sm:text-textsm md:text-textmd lg:text-textlg sm:row-start-8 sm:row-span-2 sm:col-start-1 sm:col-span-6 sm:justify-self-center md:row-start-5 md:row-span-2 md:col-start-1 md:col-span-12 md:content-start md:justify-self-start text-wrap break-words lg:row-start-2 lg:col-start-7 lg:col-span-6 lg:row-span-3 lg:content-start"
            role="article"
          >
            {parkInfo.introduction}
          </p>
          <ParkImage
            name={parkInfo.name}
            alt={`Image of ${parkInfo.name}`}
            className="sm:w-[390px] sm:h-[400px] sm:col-start-1 sm:col-span-6 sm:row-start-1 sm:row-span-4 sm:place-self-center md:justify-self-center md:w-[600px] md:h-[400px] md:col-start-1 md:col-span-12 md:row-span-2 lg:w-[690px] lg:h-[460px] lg:row-start-5 lg:row-span-4 lg:col-start-7 lg:col-span-6 rounded lg:content-center lg:justify-self-start"
          />
        </div>
      </section>
    </>
  );
};
