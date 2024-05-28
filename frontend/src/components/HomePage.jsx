import heroImage from "/hero-image.jpg";
import logo from "/logo.png";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white bg-opacity-15 backdrop-blur-md shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <div className="text-2xl font-bold text-primary">ADHD Connect</div>
          </div>
          <div>
            <a href="/" className="mx-2 text-dark hover:text-secondary">
              Home
            </a>
            <a href="/about" className="mx-2 text-dark hover:text-secondary">
              About Us
            </a>
            <a href="/events" className="mx-2 text-dark hover:text-secondary">
              Events
            </a>
            <a
              href="/signup-listener"
              className="mx-2 text-dark hover:text-secondary"
            >
              Sign Up as Listener
            </a>
            <a
              href="/signup-seeker"
              className="mx-2 text-dark hover:text-secondary"
            >
              Sign Up as Seeker
            </a>
          </div>
        </div>
      </nav>
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
              A safe Space to share,connect and find support
            </p>
            <a
              href="/signup-seeker"
              className="mt-8 inline-block bg-light text-primary px-6 py-3 rounded-full text-lg"
            >
              Join Us
            </a>
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
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="text-dark">
              "This community has been a lifesaver. Connecting with others who
              understand ADHD and has made such a difference in my life."
            </p>
            <p className="mt-4 text-right text-gray-600">- Jane Doe</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <p className="text-gray-800">
              "Finding someone to talk to when I'm having a hard day has been
              invaluable. Thank you for creating this space."
            </p>
            <p className="mt-4 text-right text-gray-600">- John Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};
