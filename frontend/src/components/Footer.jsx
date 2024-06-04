import swoop from "/footer-swoop.svg";
import instagram from "/soMeIcons/instagram.svg";
import facebook from "/soMeIcons/facebook.svg";
import github from "/soMeIcons/github.svg";
import linkedin from "/soMeIcons/linkedin.svg";
import dottedLine from "/soMeIcons/dottedLine.svg";

export const Footer = ({ data }) => {
  const missionStatement = data.missionStatement;
  const contact = data.contactInfo;

  console.log("statement: ", missionStatement.perks);

  return (
    <>
      <section className="mission">
        <div className="bg-main-green text-text-light">
          <img className="w-full" src={swoop} alt="Section border" />
          <div className="p-6 tablet:p-10 laptop:p-20">
            <div className="flex mb-8 items-end justify-center">
              <h2 className="font-heading text-4xl">
                {missionStatement.title}
              </h2>
            </div>
            {missionStatement.perks.map((item, index) => {
              <div>
                <h3 key={index}>{item.perk}</h3>
                <p>{item.comment}</p>
              </div>;
            })}
          </div>
        </div>
        <img
          className="w-full bg-main-green"
          src={dottedLine}
          alt="Section border"
        />
      </section>

      <section className="contact bg-main-green text-text-light">
        <h2 className="font-heading text-4xl text-center my-10">
          {contact.title}
        </h2>
        <div className="flex gap-4 justify-center my-10">
          {contact.contactRoute.map((item, index) => {
            <p key={index}>hej</p>;
          })}
          <img className="w-10" src={facebook} />
          <img className="w-10" src={instagram} />
          <img className="w-10" src={linkedin} />
          <img className="w-10" src={github} />
        </div>
      </section>
    </>
  );
};
