import "./styling/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper">
        <img
          className="aboutImage"
          src="/images/myImage.svg"
          alt="Image of Paula"
        />
        <div className="aboutContentWrapper">
          <h3 className="aboutTitle">Thank you for checking out my website!</h3>
          <p className="aboutText">
            This project was created as my final project after six intensive
            months studying web development in the Technigo Bootcamp.
          </p>
          <p className="socialMediaText">
            Check out the links to get to know more about me:
          </p>
          <div className="socialMediaWrapper">
            <a
              href="https://www.linkedin.com/in/paula-jung%C3%A5ker-380418299/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="linkedInIcon"
                src="/icons/linkedInIcon.png"
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="https://www.instagram.com/paula.jungaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="instagramIcon"
                src="/icons/instagramIcon.png"
                alt="Instagram Icon"
              />
            </a>
            <a
              href="https://www.facebook.com/paula.jungaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="facebookIcon"
                src="/icons/facebookIcon.png"
                alt="Facebook Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
