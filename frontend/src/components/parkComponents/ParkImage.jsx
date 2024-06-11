import parkImage from "../../parkImage.json";

export const ParkImage = ({ name, alt, className }) => {
  const parkImg = parkImage.find((img) => img.name === name);

  return (
    parkImg && (
      <img className={`${className}`} src={parkImg?.imageUrl} alt={alt} />
    )
  );
};
