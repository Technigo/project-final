import { useState } from "react";

import EventCard from "../components/EventCard";
import eventsData from "../data/events.json";
import Footer from "../utilities/Footer";
import HeroSection from "../utilities/HeroSection";
import Menu from "../utilities/Menu";

export const EventsPage = () => {
  const [flipped, setFlipped] = useState(null);

  const handleFlip = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  const nextEvent = eventsData[0];

  return (
    <div className="min-h-screen bg-light">
      <Menu />
      <HeroSection
        imageUrl="/images/event-hero.jpg"
        title="Join Our Events"
        subtitle=" Learn, connect, and support each other in our upcoming event."
        className="h-96 lg:h-[28rem] xl:h-[32rem] bg-cover bg-top"
        style={{ objectPosition: "top center" }}
      />

      {/* Showcasing an Event Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-dark text-center">Next Event</h2>
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
