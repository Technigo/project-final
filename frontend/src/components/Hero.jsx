import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { Navigation } from "./Navigation";
import heroImage from "/hero-image.png";
import swoop from "/hero-swoop.svg";

export const Hero = ({ data }) => {
  console.log(data.ctaText);
  return (
    <section className="relative  min-h-[400px] max-h-full">
      <img
        className="object-cover h-[543px] tablet:h-[598px] laptop:h-[810px]"
        src={heroImage}
        alt="background image"
      ></img>

      <div className="absolute top-0 right-0 w-44 tablet:w-72 laptop:w-96 m-10 tablet:m-20 laptop:m-40 text-right text-white font-body">
        <p className="py-4 text-xl tablet:text-2xl laptop:text-4xl">{data.ctaText}</p>
        <NavLink to="/signup" >
          <button className="bg-cta-blue px-6 py-2 rounded-full hover:bg-cta-blue-hover">
            {data.ctaButton}
          </button>
        </NavLink>
      </div>
      <img className="absolute bottom-0 w-full" src={swoop} />
    </section>
  );
};
