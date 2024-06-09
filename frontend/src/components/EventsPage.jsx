import { Button } from "../utilities/Button";
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

  return (
    <div className="min-h-screen bg-light font-sans">
      <Menu />
      <header
        className="relative h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroEventImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-20 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold font-serif">
              Join Us for the Next ADHD Event
            </h1>
            <p className="mt-4 text-xl">
              Learn, connect, and support each other in our upcoming event
            </p>
            <div className="mt-8">
              <a
                href="/event-details"
                className="inline-block bg-light text-primary px-6 py-3 rounded-full text-lg"
              >
                Happening Soon
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Showcasing an Event Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-dark">
            Next Event: How to Plan Your Days with ADHD
          </h2>
          <p className="mt-4 text-lg text-dark">
            Join us for an interactive session on strategies and tools to help
            plan and organize your days more effectively.
          </p>
          <div className="mt-8">
            <Button text="Where?" link="register" variant="primary" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center text-dark">
            Upcoming Events
          </h2>
          <div className="mt-8 space-y8">
            {eventsData.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                index={index}
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

{
  /*  primary: "#D1510A"
secondary: "#923A06"
accent: "#D8BFAF"
light: "#F3E8E2"
lighter: "#E0D1CB"
dark: "#191818"  */
}
