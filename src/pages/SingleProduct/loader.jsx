import { customFetch } from "../../utils";

const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);

  return { product: response.data.data };
};

export default loader;
