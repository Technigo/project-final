import { Heading } from "./Heading";
import {
  BuildingLibraryIcon,
  SparklesIcon,
  FaceSmileIcon,
  CakeIcon,
  GiftTopIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const Schedule = () => {
  return (
    <section className="antialiased">
      <div className="mx-auto max-w-screen-xl px-6 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-left">
          <Heading content={"Schedule of our day"} level={2} pre={""} />
        </div>

        <div className="mx-auto mt-8 flow-root max-w-3xl md:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-accent">
            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 self-center text-md font-normal text-text sm:text-right md:text-lg">
                15:30
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <BuildingLibraryIcon className="h-6 w-6 self-center" />
                Arrival and Seating
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-gray-500 ml-4 shrink-0 text-md font-normal sm:text-right md:text-lg ">
                16:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <HeartIcon className="h-6 w-6 self-center" />
                Wedding Ceremony
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                16:30
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <FaceSmileIcon className="h-6 w-6 self-center" />
                Cocktail Hour
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                18:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <SparklesIcon className="h-6 w-6 self-center" />
                Grand Entrance
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                18:15
              </p>
              <h3 className="inline-flex gap-4 text-md font-semibold text-text md:text-lg">
                <GiftTopIcon className="h-6 w-6 self-center " />
                Dinner Service
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                19:45
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg ">
                <CakeIcon className="h-6 w-6 self-center" />
                Cake Cutting
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                20:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <MusicalNoteIcon className="h-6 w-6 self-center" />
                First Dances
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                23:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <StarIcon className="h-6 w-6 self-center" />
                Grand Exit
              </h3>
            </div>

            <div className="flex flex-row items-center gap-7 py-4 md:gap-10">
              <p className="w-30 ml-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                23:15
              </p>
              <h3 className="inline-flex gap-4 text-md font-semibold text-text md:text-lg">
                <GlobeAltIcon className="h-6 w-6 self-center" />
                After Party
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
