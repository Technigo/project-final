import Footer from "../utilities/Footer";
import Menu from "../utilities/Menu";
import heroEventImage from "/images/event-hero.jpg";
import eventsData from "../data/events.json";
import { useState } from "react";
import EventCard from "../components/EventCard";

export const EventsPage = () => {
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  const nextEvent = eventsData[0];

  return (
    <div className="min-h-screen bg-light ">
      <Menu />
      <header
        className="relative h-96 md:h-96 lg:h-96 xl:h-96 bg-cover bg-top"
        style={{ backgroundImage: `url(${heroEventImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center p-4 md:p-10">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold ">Join Us for The Next Event</h1>
            <p className="mt-2 md:mt-4 text-xl">
              Learn, connect, and support each other in our upcoming event
            </p>
          </div>
        </div>
      </header>

      {/* Showcasing an Event Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-dark">Next Event</h2>
          <div className="mt-8">
            <EventCard
              event={nextEvent}
              index={0}
              flipped={flipped}
              handleFlip={handleFlip}
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center text-dark">Upcoming Events</h2>
          <div className="mt-8 space-y-8">
            {eventsData.slice(1).map((event, index) => (
              <EventCard
                key={index + 1}
                event={event}
                index={index + 1}
                flipped={flipped}
                handleFlip={handleFlip}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
