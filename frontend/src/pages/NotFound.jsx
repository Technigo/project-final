import { Loading } from "../components/Loading";
import { Footer } from "../components/Footer";

export const NotFound = ({ reason }) => {

  console.log(reason)
  return (
    <div className="bg-main-red ">
      <h2 className="text-center font-heading py-40 text-text-light text-2xl">
        The {reason} you are looking for was not found.
      </h2>
      <Loading />

      {/* add the X of the bg-main-X to the aboveColor to make the Footer match*/}
      <Footer aboveColor={"red"} />
    </div>
  );
};
