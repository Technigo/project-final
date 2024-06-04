import swoop from "/statement-swoop.svg";
import swoopBottom from "/statement-bottom-swoop.svg";
import wideImage from "/mockupimages/mockup-faces.png";
import face1 from "/mockupimages/mockup-face1.png";
import face2 from "/mockupimages/mockup-face2.png";
import glim from "/glim-logo.svg";

export const Statements = ({ data }) => {
  return (
    <div className="bg-main-white text-text-dark leading-loose tablet:text-2xl ">
      <img className="w-full" src={swoop} alt="Section border" />
      <div className="p-6 tablet:p-10 laptop:p-20">
        <div className="flex mb-8 items-end tablet:justify-center laptop:justify-end">
          <h2 className="font-heading text-4xl text-text-dark">{data.title}</h2>{" "}
          <img className="w-20 ml-10" src={glim} />
        </div>
        <p className="font-body ">{data.subTitle}</p>
        <img className="my-10" src={wideImage} />
        <div>
          <img className="float-right w-1/4 mx-4" src={face1} />
          <p className="text-justify font-body m-4">{data.text}</p>
        </div>
        <img className="w-2/3 m-auto my-20" src={face2} />
        <p className="font-body text-2xl text-center font-light w-44 leading-loose m-auto">
          {data.lastLines}
        </p>
      </div>
      <img className="w-full" src={swoopBottom} alt="Section border" />
    </div>
  );
};
