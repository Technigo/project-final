import Footer from "../utilities/Footer";
import Menu from "../utilities/Menu";
import heroEventImage from "/images/event-hero.jpg";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p
        className="text-2m text-primary cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </p>
      {isOpen && <p className="mt-4 text-dark font-light">{answer}</p>}
    </div>
  );
};
export const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Menu />
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroEventImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
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
                Next Event
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Showcasing an Event Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-dark">
            Upcoming Event: How to Plan Your Days with ADHD
          </h2>
          <p className="mt-4 text-lg text-dark">
            Join us for an interactive session on strategies and tools to help
            plan and organize your days more effectively.
          </p>
          <div className="mt-8">
            <a
              href="/register"
              className="bg-primary text-light px-6 py-3 rounded-full text-lg"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center text-dark">
            Upcoming Events
          </h2>
          <div className="mt-8 space-y-8">
            {/* Event 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary">
                Social Activities for ADHD
              </h3>
              <p className="mt-4 text-dark">
                Engage in fun and supportive social activities designed for
                individuals with ADHD. Meet new friends and build a community.
              </p>
              <div className="mt-4">
                <a
                  href="/event-details"
                  className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Event 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary">
                Mindfulness and ADHD
              </h3>
              <p className="mt-4 text-dark">
                Explore mindfulness techniques to help manage ADHD symptoms and
                improve focus and emotional regulation.
              </p>
              <div className="mt-4">
                <a
                  href="/event-details"
                  className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Event 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary">
                ADHD Support Group
              </h3>
              <p className="mt-4 text-dark">
                Join our support group to share experiences, tips, and support
                with others living with ADHD.
              </p>
              <div className="mt-4">
                <a
                  href="/event-details"
                  className="bg-primary text-light px-4 py-2 rounded hover:bg-secondary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif text-dark">
            Register for our Events
          </h2>
          {/* Registration form or details */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center text-dark">
            FAQs
          </h2>
          <div className="mt-8 space-y-8">
            <FAQItem
              question="What is ADHD?"
              answer="ADHD stands for Attention Deficit Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults, characterized by symptoms of inattention, hyperactivity, and impulsivity."
            />
            <FAQItem
              question="How can I join an ADHD support group?"
              answer="You can join our ADHD support group by registering for our upcoming events. We have regular meetings and activities designed to help individuals with ADHD connect and support each other."
            />
            <FAQItem
              question="What kind of events do you organize?"
              answer="We organize a variety of events including workshops on planning and organization, social activities, mindfulness sessions, and support group meetings. Check our events page for the latest schedule."
            />
            <FAQItem
              question="Are the events free?"
              answer="Some of our events are free, while others may have a small fee to cover costs. Details about event fees can be found on the event registration pages."
            />
            <FAQItem
              question="How can I volunteer or support the ADHD community?"
              answer="We welcome volunteers and supporters! Please contact us through our website or join our events to learn more about how you can get involved."
            />
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
