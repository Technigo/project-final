import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./components/CheckoutForm";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import dataEn from "./data.en.json";
import { GlimRoutes } from "./routes/GlimRoutes";

export const App = () => {
  const data = dataEn;

  // Preparation for translation
  // remove the const data from above

  /*
  const [locale, setLocale] = useState("en");

  const data = locale === "en" ? dataEn : dataJp;

  const handleLanguageChange = (e) => {
    setLocale(e.target.value);
  };
  */

  return (
    <>
      <ScrollToTop />
      <div className="bg-main-red">
        <Navigation data={data["navbar"]} />
        <GlimRoutes data={data} />
      </div>
    </>
  );
};
