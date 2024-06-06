import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="h-[700px] bg-[url('/src/assets/heroBg.jpg')] bg-cover bg-right-bottom">
          <h1>Design Your Website with Ease</h1>
          <p>
            Discover the perfect web template for you! No coding skills
            needed—just pick, customize, and launch. Let&apos;s make website
            creation easy and fun!
          </p>
          <Button text="SIGN UP" />
        </section>
      </main>
      <Footer />
    </div>
  );
};
