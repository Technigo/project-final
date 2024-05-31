import { Navigation } from "./components/Navigation";
import { GlimRoutes } from "./routes/GlimRoutes";
import dataEn from "./data.en.json";

export const App = () => {
  const data = dataEN;

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
      <Navigation data={data["navbar"]} />
      <GlimRoutes />
    </>
  );
};
