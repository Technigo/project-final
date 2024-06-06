import swoop from "/footer-swoop.svg";
import instagram from "/soMeIcons/instagram.svg";
import facebook from "/soMeIcons/facebook.svg";
import github from "/soMeIcons/github.svg";
import linkedin from "/soMeIcons/linkedin.svg";
import dottedLine from "/soMeIcons/dottedLine.svg";

export const Footer = ({ data }) => {
  const missionStatement = data.missionStatement;
  const contact = data.contactInfo;

  const perkArray = missionStatement.perks;

  return (
    <>
      <section className="mission bg-main-green">
        <div className=" text-text-light">
          <img className="w-full" src={swoop} alt="Section border" />
          <div className="p-6 tablet:p-10 laptop:p-20">
            <div className="flex mb-8 items-end justify-center">
              <h2 className="font-heading text-4xl">
                {missionStatement.title}
              </h2>
            </div>
            {missionStatement.perks &&
              missionStatement.perks.map((item, index) => (
                <div className="text-center my-8">
                  <h3 className="font-heading text-2xl my-2">{item.perk}</h3>
                  <p className="w-[25ch] hidden tablet:block m-auto">
                    {item.comment}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <img
          className="w-3/4 h-2 m-auto object-cover bg-main-green"
          src={dottedLine}
          alt="Section border"
        />
      </section>

      <section className="contact bg-main-green text-text-light">
        <h2 className="font-heading text-4xl text-center my-10">
          {contact.title}
        </h2>

        <div className="flex whitespace-pre text-body flex-col gap-4 align-center my-10">
          {contact.contactRoute.map((item, index) => (
            <div className="flex flex-col items-center my-6">
              <img className="w-12 my-4" src={item.icon} alt={item.altText} />
              <p className="text-center font-extralight">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-8 justify-center my-10">
          {contact.socialMedia.map((item, index) => (
            <img
              className="w-10 hover:opacity-75 hover:cursor-pointer active:opacity-50"
              src={item.icon}
              alt={item.altText}
            />
          ))}
        </div>
      </section>
    </>
  );
};
