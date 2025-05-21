import { customFetch } from "../../utils";

const url = "/products";

const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;

  return {
    products,
    meta,
  };
};

export default loader;
