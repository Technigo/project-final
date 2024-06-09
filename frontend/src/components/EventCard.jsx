const EventCard = ({ event, index, flipped, handleFlip, className }) => {
  const isFlipped = flipped === index;

  return (
    <div
      key={index}
      className="relative w-full bg-light p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-500 mb-4 md:mb-8 flex flex-col md:flex-row"
      onClick={() => handleFlip(index)}
      style={{ perspective: "1000x" }}
    >
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full md:w-1/2 h-48 md:h-full object-cover rounded-lg"
        style={{
          maxHeight: "350px",
        }}
      />
      <div
        className={`relative w-full h-full flex flex-col justify-center items-center md:items-start md:justify-start rounded-lg`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.5s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="w-full h-full flex flex-col justify-center md:justify-start items-center md:items-start p-4 md:p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="mt-4 md:mt-0 w-full">
            <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
            <p className="mt-4 text-dark">{event.description}</p>
          </div>
        </div>
        <div
          className="absolute w-full h-full flex flex-col justify-center items-center p-4 md:p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
          <div className="mt-4 text-dark text-left md:text-left">
            <p>
              <strong>Time:</strong> {event.details.time}
            </p>
            <p>
              <strong>Place:</strong> {event.details.place}
            </p>
            <p>{event.details.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
