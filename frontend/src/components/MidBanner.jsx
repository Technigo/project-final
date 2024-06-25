export const MidBanner = ({ MidBannerText }) => {
  return (
    <div className=" bg-bg1 justify-center items-center flex mt-[50px] mb-[80px]">
      <p className="lg:text-h2g lg:w-[600px] md:text-h2md md:w-[400px] md:h-[300px] sm:text-h2sm sm:w-[300px] sm:h-[300px] font-avenir font-semibold lg:h-[250px] text-center items-center justify-center flex ">
        {MidBannerText}
      </p>
    </div>
  );
};
