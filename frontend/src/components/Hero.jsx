import heroImage from "/mockupimages/hero-image.png";
import swoop from "/swoops/hero-swoop.svg";
import { NavLink } from "react-router-dom";

import { useUserStore } from "../store/useUserStore";

export const Hero = ({ data }) => {
  const { loggedIn, user } = useUserStore();

  return (
    <section className="relative  min-h-[400px] max-h-full">
      {!loggedIn ? (
        <>
          <img
            className="object-cover w-full h-[543px] tablet:h-[598px] laptop:h-[810px]"
            src={heroImage}
            alt="background image"
          />
          <div className="absolute top-0 right-0 w-44 tablet:w-72 laptop:w-96 m-10 tablet:m-20 laptop:m-40 text-right text-white font-body">
            <h1 className="py-4 text-xl tablet:text-2xl laptop:text-4xl">
              {data.ctaText}
            </h1>
            <NavLink to="/signup">
              <button className="bg-cta-blue px-6 py-2 rounded-full hover:bg-cta-blue-hover">
                {data.ctaButton}
              </button>
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <img
            className="object-cover w-full h-[543px] tablet:h-[598px] laptop:h-[810px]"
            src="/mockupimages/splash-glim.png"
            alt="background image"
          />
          <div className="absolute bottom-0 right-0 transform tablet:transform-none -translate-x-1/3 tablet:-translate-y-none -translate-y-1/2 z-10 tablet:right-0 tablet:top-0 w-44 tablet:w-72 laptop:w-96 tablet:m-20 laptop:m-40 text-right text-white font-body">
            <p className="py-4 text-xl tablet:text-2xl laptop:text-4xl">
              {data.ctaTextLoggedIn}
              <span className="text-2xl tablet:text-4xl font-black">
                 {user.user.firstname}
              </span>
            </p>
            <NavLink to="/products">
              <button className="bg-cta-blue px-6 py-2 rounded-full hover:bg-cta-blue-hover">
                {data.ctaButtonLoggedIn}
              </button>
            </NavLink>
          </div>
        </>
      )}
      <img alt="swoop" className="absolute bottom-0 w-full" src={swoop} />
    </section>
  );
};
