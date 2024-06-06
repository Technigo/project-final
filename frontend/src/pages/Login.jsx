import { Form } from "../components/Form";

export const Login = () => {
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <div className="mx-auto flex w-full flex-col items-center lg:max-w-screen-md lg:flex-initial lg:items-start">
        <h1 className="font-poppins font-bold mt-10 lg:mb-10">Login</h1>
        <div className="mx-auto">
          <Form isLogin={true} />
        </div>
      </div>
    </div>
  );
};
