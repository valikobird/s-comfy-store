import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/index.jsx";

const loader = (store) => {
  return async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const orders = response.data.data;
      const meta = response.data.meta;

      return {
        orders,
        meta,
      };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There is an issue with loading your orders";
      toast.error(errorMessage);

      if (error.response.status === 401 || error.response.status === 403) {
        return redirect("/login");
      }
      return null;
    }
  };
};

export default loader;
