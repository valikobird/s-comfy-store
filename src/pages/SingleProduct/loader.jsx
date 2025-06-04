import { customFetch } from "../../utils";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

const loader = (queryClient) => {
  return async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id),
    );

    return { product: response.data.data };
  };
};

export default loader;
