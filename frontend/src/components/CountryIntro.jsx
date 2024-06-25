export const CountryIntro = ({
  topic,
  text,
  countryIntroImg,
  countryIntroImgAlt,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-start">
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <h2 className="lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir md:mr-[150px]">
          {topic}
        </h2>
      </div>
      <div>
        <p className="font-avenir lg:text-textlg md:text-textmd sm:text-textsm md:w-[700px] sm:w-[300px] mb-[25px] lg:mb-0">
          {text}
        </p>
        <img
          src={countryIntroImg}
          alt={countryIntroImgAlt}
          className="lg:w-[700px] lg:h-[450px] md:w-[400px] md:h-[300px] sm:w-[370px] sm:h-[230px]"
        />
      </div>
    </div>
  );
};