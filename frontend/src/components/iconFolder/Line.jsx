export const Line = ({ stroke = "#020209", width="363" }) => {
  return (
    <svg
      width={width}
      height="2"
      viewBox="0 0 363 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2={width} y2="1" stroke={stroke} strokeWidth="2" />
    </svg>
  );
};
