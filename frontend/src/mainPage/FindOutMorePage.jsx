import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../common/Button";
import Footer from "../common/Footer";
import Menu from "../common/Menu";
import { AuthForm } from "../components/Auth/AuthForm";
import { useModal } from "../components/Auth/ModalContext";

export const FindOutMorePage = () => {
  const { isAuthenticated, showModal } = useModal();
  const navigate = useNavigate();
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    "Many adults with ADHD were not diagnosed as children.",
    "ADHD in adults can affect job performance, relationships, and daily functioning.",
    "Adults with ADHD may experience symptoms such as restlessness, difficulty in maintaining focus, and impulsiveness.",
    "Therapy and medication can be effective in managing ADHD symptoms in adults.",
    "Joining a support group can provide valuable connections and coping strategies.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prevFact) => (prevFact + 1) % facts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [facts.length]);

  const handleAuthSuccess = () => {
    navigate("/profile");
  };

  const handleRoleSelection = (type) => {
    showModal(<AuthForm type={type} onSuccess={handleAuthSuccess} />);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Menu />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center my-8">
          <h2 className="text-3xl text-dark mb-8">Did You Know?</h2>
          <div className="flex justify-center">
            <div className="relative w-full md:w-2/3 lg:w-1/2 p-6 transition-transform transform duration-500 hover:scale-105">
              <p className="text-2xl md:text-3xl text-dark quotation">
                {facts[currentFact]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container mx-auto px-4 text-left md:text-center">
          <h2 className="text-3xl text-dark mb-8">Roles in Our Community</h2>

          <div className="flex flex-col md:flex-row justify-center items-start gap-10 ">
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Help Someone
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                As a listener, you provide support and understanding to those in
                need. You offer a compassionate ear and empathetic response to
                their challenges and experiences with ADHD.
              </p>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Talk with Someone
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                As a seeker, you have the opportunity to express your thoughts
                and feelings about living with ADHD. You can share your
                experiences, seek advice, or simply connect with others who
                understand your journey.
              </p>
            </div>
          </div>

          {!isAuthenticated && (
            <div className="flex justify-center mt-8">
              <Button
                text="Choose your role"
                onClick={() => handleRoleSelection("signup")}
                variant="primary"
              />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};
