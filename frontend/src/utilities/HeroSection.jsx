const HeroSection = ({ imageUrl, title, subtitle, className, style }) => {
  return (
    <header
      className={`relative bg-cover ${className}`}
      style={{ backgroundImage: `url(${imageUrl})`, ...style }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center p-4 md:p-10">
        <div className="text-center text-light">
          <h1 className="text-4xl pt-8 font-bold">{title}</h1>
          <p className="mt-2 md:mt-4 text-xl">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
