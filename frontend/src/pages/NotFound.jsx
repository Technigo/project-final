import { Loading } from "../components/Loading";

export const NotFound = () => {
  return (
    <div className="bg-main-red ">
      <h2 className="text-center font-heading py-40 text-text-light text-2xl">The page you are looking for was not found.</h2>
      <Loading />
    </div>
  );
};
