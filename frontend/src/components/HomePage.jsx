import heroImage from "/hero-image.jpg";
import logo from "/adhdlg.png";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white bg-opacity-70 backdrop-blur-md shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <div className="text-2xl font-bold text-primary">
              ADHD Community
            </div>
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
      ></header>
      ;
    </div>
  );
};

/*   <header className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to the ADHD Community</h1>
          <p className="mt-4 text-xl">A safe space to share, connect, and find support</p>
          <a href="/signup-seeker" className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-full text-lg">Join Us</a>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Join Us?</h2>
          <p className="mt-4 text-lg">Connect with others who understand your journey</p>
          <div className="mt-8">
            <a href="/signup-seeker" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg">Get Started</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Testimonials</h2>
          <div className="mt-8 space-y-8">
            <div className="bg-white shadow p-6 rounded-lg">
              <p className="text-gray-800">"This community has been a lifesaver. Connecting with others who understand ADHD has made such a difference in my life."</p>
              <p className="mt-4 text-right text-gray-600">- Jane Doe</p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <p className="text-gray-800">"Finding someone to talk to when I'm having a hard day has been invaluable. Thank you for creating this space."</p>
              <p className="mt-4 text-right text-gray-600">- John Smith</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; */
