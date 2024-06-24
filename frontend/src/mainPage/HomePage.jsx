import heroImage from "/images/hero-image.jpg";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import Footer from "../common/Footer";
import Menu from "../common/Menu";
import { AuthForm } from "../components/registration/AuthForm";
import { useModal } from "../components/registration/ModalContext";
import Testimonials from "./Testimonials";

export const HomePage = () => {
  const { showModal } = useModal();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    showModal(
      <AuthForm type="signup" onSuccess={() => navigate("/profile")} />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <Menu />
      <header className="relative h-screen">
        <img
          src={heroImage}
          alt="Community Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-light">
            <h1 className="text-4xl font-bold ">Welcome to the ADHD Connect</h1>
            <p className="mt-4 text-xl">
              A safe space to share, connect, and find support
            </p>
            <div className="mt-8">
              <Button
                text="Find Out More"
                link="/find-out-more"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold  text-dark">Why Join us?</h2>
          <p className="mt-4 text-lg text-dark">
            Connect with others who understand your journey
          </p>
          <div className="mt-8">
            <Button
              text="Get Started"
              onClick={handleGetStartedClick}
              variant="light"
            />
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8 lg:justify-center">
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl py-6 font-bold text-dark">
                Don't just take our word for it...
              </h2>
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark">
            Join Our Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-dark">
            Discover events designed to help you connect, learn, and grow with
            the ADHD community.
          </p>
          <div className="mt-8">
            <Button text="View All Events" link="/events" variant="primary" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
