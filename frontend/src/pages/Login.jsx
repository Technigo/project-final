import { Form } from "../components/Form";
import { Breadcrumb } from "../components/Breadcrumb";

export const Login = () => {
  return (
    <>
        <Breadcrumb />
      <div className="flex w-full justify-center lg:justify-start">
        <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
          <h1 className="mt-10 font-poppins font-bold lg:mb-10">Login</h1>
          <div className="mx-auto">
            <Form isLogin={true} />
          </div>
        </div>
      </div>
    </>
  );
};
