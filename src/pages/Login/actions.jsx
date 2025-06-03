import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { customFetch } from "../../utils";
import { loginUser } from "../../features/user/userSlice";

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));

      toast.success("Login successful");

      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };
};
