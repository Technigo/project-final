import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Footer } from "../components/Footer";

export const Signup = () => {
  return (
    <>
      <Header />
      <div className="mb-20 pt-10 lg:mb-32 lg:mt-20">
        <Form isLogin={false} />
      </div>
      <Footer />
    </>
  );
};
