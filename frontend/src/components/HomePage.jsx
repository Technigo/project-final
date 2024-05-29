import heroImage from "/images/hero-image.jpg";
import Menu from "../utilities/Menu";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Menu />
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold font-serif">
              Welcome to the ADHD Community
            </h1>
            <p className="mt-4 text-xl">
              A safe space to share, connect, and find support
            </p>
            <div className="mt-8">
              <a
                href="/find-out-more"
                className="inline-block bg-light text-primary px-6 py-3 rounded-full text-lg"
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3x1 font-bold font-serif text-dark">
            Why Join us?
          </h2>
          <p className="mt-4 text-lg text-dark">
            Connect with others who understand your journey
          </p>
          <div className="mt-8">
            <a
              href="/signup-seeker"
              className="bg-primary text-light px-6 py-3 rounded-full text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-serif text-center text-dark">
            Testimonials
          </h2>
          <div className="mt-8 space-y-8">
            <div className="bg-white shadow p-6 rounded-lg">
              <p className="text-dark">
                "This community has been a lifesaver. Connecting with others who
                understand ADHD has made such a difference in my life."
              </p>
              <p className="mt-4 text-right text-secondary">- Jane Doe</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <p className="text-dark">
                "Finding someone to talk to when I'm having a hard day has been
                invaluable. Thank you for creating this space."
              </p>
              <p className="mt-4 text-right text-secondary">- John Smith</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
