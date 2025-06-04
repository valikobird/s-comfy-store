import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../../utils";

const url = "/orders";

const ordersQuery = (urlParams, user) => {
  const page = urlParams.page ? +urlParams.page : 1;

  return {
    queryKey: ["orders", user.id, page],
    queryFn: () =>
      customFetch.get(url, {
        params: urlParams,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

const loader = (store, queryClient) => {
  return async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning("You must be logged in to view orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user),
      );

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

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect("/login");
      }
      return null;
    }
  };
};

export default loader;
