import { Navigation } from "./components/Navigation";
import { GlimRoutes } from "./routes/GlimRoutes";
import { ScrollToTop } from "./components/ScrollToTop";

import dataEn from "./data.en.json";

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
