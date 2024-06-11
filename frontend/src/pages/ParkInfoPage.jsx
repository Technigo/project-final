import { useParkStore } from "../store/useParkStore";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Map } from "../components/Map";
import { ParkImage } from "../components/parkComponents/ParkImage";
import { BackBtn } from "../components/buttons/BackBtn";
import {Line} from "../components/iconFolder/Line"
import {TextRating} from "../components/parkComponents/ParkRate"



export const ParkInfoPage = () => {
  const { fetchParkData, parkData, loading, error } = useParkStore();
  const { parkName } = useParams();

  useEffect(() => {
    fetchParkData(`https://parkhive.onrender.com/parks`);
    console.log(parkData);
  }, [fetchParkData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const parkInfo = parkData.find(
    (park) => park.name.toLowerCase().replace(/ /g, "-") === parkName
  );
  if (!parkInfo) {
    return (
      <>
        <div>Park not found</div>
        <Link to={"/"}>Back to home page</Link>
      </>
    );
  }

  return (
    <>
      <section className="sm:p-2 md:p-5 lg:p-4">
        <div className=" ">
          <BackBtn />
        </div>

        <div
          key={parkInfo._id}
          className="grid max-w-full sm:grid-rows-12 sm:grid-cols-6 sm:p-2 md:grid-cols-11 md:grid-rows-14 md:p-3 
      lg:grid-rows-13 lg:grid-col-11 pt-3"
        >
          <div
            className="sm:row-start-5 sm:col-span-3 content-end md:row-start-3 md:col-span-6 sm:pl-3
        lg:row-start-1 lg:col-start-1 lg:content-center"
          >
            <Line />
            <h2 className="sm:text-h2sm md:text-h2lg lg:text-h2lg l">
              {parkInfo.name}
            </h2>
          </div>
          <div className="sm:row-start-6 sm:col-start-1 sm:pl-3 sm:pt-3 content-start md:row-start-4 lg:row-start-2 ">
            <p className="sm:text-textsm md:text-textmd lg:text-textlg">
              {parkInfo.rating}
            </p>
            <TextRating labels={parkInfo.rating} value={parkInfo.rating} />
          </div>

          <div
            className="sm:row-start-6 sm:col-start-3 sm:col-span-3 sm:pt-3 md:row-start-4 md:col-start-6 md:col-span-5 md:content-start
        lg:row-start-3 lg:col-start-1 "
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
            className={
              "sm:w-[390px] sm:h-[224px] md:w-[534px] md:h-[324px] lg:w-[423px] l:h-[278px] sm:row-start-10 sm:col-start-1 sm:col-span-5 md:row-start-7 md:col-start-1 md:col-span-10 lg:row-start-6 lg:col-start-1 lg:col-span-4 justify-self-center"
            }
          />
          <p
            className="sm:text-textsm md:text-textmd lg:text-textlg sm:row-start-8 sm:row-span-2 sm:col-start-1 sm:col-span-5 sm:w-[390px] justify-self-center md:row-start-5 md:row-span-2 md:col-start-1 md:col-span-10 md:content-center md:w-[600px] text-wrap  break-words truncate 
        lg:row-start-2 lg:col-start-7 lg:row-span-4 lg:w-[690px] lg:content-start"
          >
            {parkInfo.introduction}
          </p>
          <ParkImage
            name={parkInfo.name}
            alt={`${parkInfo.name}`}
            className={
              "sm:w-[390px] sm:h-[400px] sm:col-start-1 sm:col-span-6 sm:row-start-1 justify-self-center md:w-[600px] md:h-[400px] md:col-start-1 md:col-span-10 lg:w-[690px] lg:h-[460px] lg:row-start-5 lg:col-start-7 rounded lg:content-center"
            }
          />
        </div>
      </section>
    </>
  );
};
