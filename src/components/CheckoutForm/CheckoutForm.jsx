import { Form } from "react-router-dom";
import FormInput from "../FormInput";
import SubmitBtn from "../SubmitBtn";

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput name="name" label="first name" type="text" />
      <FormInput name="address" label="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
