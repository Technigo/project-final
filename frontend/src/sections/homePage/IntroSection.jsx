import "./styling/IntroSection.css";

const IntroSection = () => {
  return (
    <div className="introContainer">
      <p className="introText">
        Discover a world of possibilities for your Mallorca adventure! With our
        unique rental service, you can easily access everything you need for a
        memorable stay. From children's toys to gardening tools and other
        everyday essentials, we make it easy for you to enjoy every moment of
        your trip without having to bring everything with you. Take advantage of
        a convenient and sustainable solution for your vacation needs and let us
        make your stay in Palma de Mallorca unforgettable.
      </p>
      <img
        src="/images/IntroImage.svg"
        className="introImage"
        alt="Image of Palma Museeum"
      />
    </div>
  );
};

export default IntroSection;
