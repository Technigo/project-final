import { Link } from "react-router-dom";

export const HomePageFinland = () => {
  const textTitle = "Discover Finnish Happiness | Explore Finland";
  const text =
    "Explore the breathtaking nature of Finland. Breathe in the fresh air of ancient forests, dip your toes in pristine lakes, and reconnect with yourself under the vast Arctic sky. Find your inner Finn – nature awaits.";
  const textImg = "/backgroundImages/mainpage-finland.jpg";
  const textImgAlt =
    "A scenic landscape of Finland featuring forests, lakes, and the Arctic sky";
  const linkTo = "/finland";
  const btnName = "Visit Finland";

  return (
    <div className="relative w-full md:w-2/3 h-[600px] flex flex-col md:flex-row sm:flex-wrap">
      <div className="flex-1 order-2 md:order-1">
        <div
          className="z-10 relative md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-2/4 md:-translate-y-1/2 bg-bg1 md:rounded-lg flex flex-col justify-center md:p-12"
          role="region"
          aria-labelledby="finland-title"
        >
          <h2
            id="finland-title"
            className="lg:text-h2lg md:text-h2md sm:text-h2sm font-avenir text-fontColor md:p-[16px] md:mt-[8px] m-[8px] pt-[8px]"
          >
            {textTitle}
          </h2>
          <p className="text-fontColor font-avenir lg:text-textlg md:text-textmd sm:text-textsm m-[16px] pb-[8px] pr-[8px]">
            {text}
          </p>

          <Link to={linkTo} aria-label="Visit Finland page">
            <div className="m-[16px] mb-[50px]">
              <button className="bg-bg2 text-cardBg font-avenir font-bold rounded-lg py-[12px] px-[10px] lg:text-textlg md:text-textmd sm:text-textsm transition-transform duration-300 hover:scale-105">
                {btnName}
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2">
        <img
          src={textImg}
          alt={textImgAlt}
          loading="lazy"
          className="md:absolute right-0 top-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
