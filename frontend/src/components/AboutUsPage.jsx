import Footer from "../utilities/Footer";
import Menu from "../utilities/Menu";
import teamImage from "/images/team.jpg";

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-light font-sans">
      <Menu />
      <header
        className="relative h-64 md:h-80 lg:h-96 xl:h-[30rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold font-serif">About Us</h1>
          </div>
        </div>
      </header>
      <section className="px-4 py-8 md:py-16 lg:px-32 xl:px-64">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Mission</h2>
          <p className="mt-4 text-lg text-dark">
            We aim to support and empower individuals with ADHD by providing a
            safe space and understanding community
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Values</h2>
          <p className="mt-4 text-lg text-dark">
            We believe in inclusivity, empathy, and the power of community. Our
            value guide us in creating a welcoming environment for everyone
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Team</h2>
          <p className="mt-4 text-lg text-dark">
            Our team is dedicated to providing resources, support, and events
            that cater to the unique needs of those with ADHD.
          </p>
        </div>
      </section>
      <section className="bg-light py-8 md:py-16 md:px-16 lg:px-32 xl:px-64">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-dark">Join Our Community</h2>
          <p className="mt-4 text-lg text-dark">
            Become part of our community and connect with others who understand
            your journey. Toghether, we can achieve more.
          </p>
          <div className="mt-8">
            <a
              href="/signup"
              className="bg-primary text-light px-6 py-3 rounded-full text-lg hover:bg-secondary"
            >
              Join Us Now
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 py-8 md:py-16 md:px-16 lg:px-32 xl:px-64">
        <div className="text-center">
          <h2 className="text-3xl font-serif text-dark">Contact Us</h2>
          <p className="mt-4 text-lg text-dark">
            If you have any questions or need support, feel free to reach out to
            us at{" "}
            <a
              href="mailto:support@adhdcommunity.com"
              className="text-primary underline"
            >
              support@adhdcommunity.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
