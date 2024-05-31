import PropTypes from "prop-types";

export const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={`${className}-image`} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
