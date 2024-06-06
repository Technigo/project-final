import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Footer } from "../components/Footer";

export const Login = () => {
  return (
    <>
      <Header />
      <Form isLogin={true} />
      <Footer />
    </>
  );
};
