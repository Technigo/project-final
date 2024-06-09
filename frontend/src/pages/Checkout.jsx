import { Breadcrumb } from "../components/Breadcrumb";
import { Dropdown } from "../components/Dropdown";
import { Form } from "../components/Form";

export const Checkout = () => {
  return (
    <div>
      <Breadcrumb />
      <h1>Shop our templates</h1>
      <Dropdown text="YOUR ACCOUNT" content={<Form isLogin={true} />} />
    </div>
  );
};
