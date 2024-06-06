import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="mx-6 my-20">
        <h2>404</h2>
        <h3>Oops! That page can’t be found</h3>
        <p>
          Sorry, but the page you are looking for doesn't exist, has been
          removed, or is temporarily unavailable. But don’t worry, there’s
          plenty more to explore: Go to our Homepage to start fresh. Use the
          search bar to find what you need. Thank you for your understanding!
        </p>
      </div>
      <Footer />
    </>
  );
};
