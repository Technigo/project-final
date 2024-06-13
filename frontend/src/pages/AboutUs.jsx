import { Breadcrumb } from "../components/Breadcrumb";
import { ProfileCard } from "../components/ProfileCard";
import wenImage from "../assets/profile-wen.jpg";
import sofieImage from "../assets/profile-sofie.jpg";
import maiImage from "../assets/profile-mai.jpg";

export const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <div className="flex w-full justify-center px-6 lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="mt-10 font-poppins font-bold lg:mb-10">About us</h1>

          <div className="md:w-2/3 pt-6">
            <p className="font-lato text-sm lg:text-lg">
              Welcome to the showcase page of our final project for the 2024
              Technigo Web Development Bootcamp. Just to know, this isn’t your
              everyday web shop—it’s a polished demo crafted especially for our
              portfolio.
            </p>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-6">
            <ProfileCard
              image={wenImage}
              name="Wen Zhao"
              role="Frontend Developer"
              githubUrl="https://github.com/wwenzz"
              linkedinUrl="https://www.linkedin.com/in/wendywenzhao/"
              email="wendy.w.zhao@outlook.com"
            />
            <ProfileCard
              image={sofieImage}
              name="Sofie Ferrari Strahl"
              role="Frontend Developer"
              githubUrl="https://github.com/SofieFerrari"
              linkedinUrl="https://www.linkedin.com/in/sofie-ferrari-strahl-495486214/"
              email="sofiestrahl@gmail.com"
            />
            <ProfileCard
              image={maiImage}
              name="Mai Kanetaka"
              role="Frontend Developer"
              githubUrl="https://github.com/maikanetaka"
              linkedinUrl="https://www.linkedin.com/in/maikanetaka"
              email="maikanetaka@gmail.com"
            />
          </div>

          <div className="mb-20 flex flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
            <h2 className="pb-6 pt-10 font-poppins font-bold text-blue">
              We look forward to hearing from you!
            </h2>
            <p className="md:w-2/3 lg:text-lg font-lato text-sm">
              Excited by what you see? Curious about the tech behind it? <br />
              Reach out and connect! Feel free to reach out with feedback,
              questions, or just to say hello. Your input is very valuable to us
              as we continue to learn and grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
