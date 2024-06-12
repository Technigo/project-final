import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

/* import dotenv from "dotenv"; */

import CheckoutForm from "./components/CheckoutForm";
import { Navigation } from "./components/Navigation";
import { ScrollToTop } from "./components/ScrollToTop";
import dataEn from "./data.en.json";
import { GlimRoutes } from "./routes/GlimRoutes";

/* dotenv.config(); */
const apiKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(apiKey);

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
      <div>
        <h1>Stripe Payment Integration</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};
